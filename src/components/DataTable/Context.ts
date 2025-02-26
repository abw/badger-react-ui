import { Model } from '@abw/react-model'
import { MouseEventHandler, useCallback, useEffect, useMemo, useState } from 'react'
import { classes, debugFunction } from '@/src/utils/index'
import { dataTableDefaults } from './defaults'
import { Storage, useComplexState } from '@/src/index'
import { hasValue, isBoolean, splitHash } from '@abw/badger-utils'
import {
  DataTableFilterValue, DataTableFilterValues, DataTableProps,
  DataTableRenderProps, DataTableState
} from './types'
import {
  dataTableColumnDefinitions, dataTableVisibleColumns, dataTableSortColumn,
  dataTableColumnOrder, dataTablePaginate, dataTableSort, dataTableFilter,
} from './Utils/index'

export const DataTableContext = Model<DataTableProps, DataTableRenderProps>(
  config => {
    const {
      rows,
      storageKey,
      storageItem,
      debugPrefix,
      pageNo,
      pageSize,
      className,
      datatableClass,
      color,
      ...props
    } = {
      ...dataTableDefaults,
      ...config
    }

    const debug = useMemo(
      () => debugFunction({
        debug: props.debug,
        debugColor: props.debugColor,
        debugPrefix
      }),
      [props.debug, props.debugColor, debugPrefix]
    )

    debug(`rows:`, rows)
    debug(`storageKey:`, storageKey)
    debug(`storageItem:`, storageItem)

    // If we have a storageKey defined then create a store and load any
    // previously saved state
    const [store, savedState] = useMemo(
      () => {
        const store = storageKey && Storage(storageKey)
        const savedState = store
          ? store.get(storageItem, { })
          : { }
        return [store, savedState]
      },
      [storageKey, storageItem]
    )

    // Expand any simple column definition, e.g. 'id name email', into an
    // object mapping column names to a definition object,
    // e.g { id: { ... }, name: { ... }, email: { ... } }
    const [columns, visibleColumns, columnOrder, sortColumn, sortReverse] = useMemo(
      () => {
        debug(`computing columns: `, props.columns)
        const columns = dataTableColumnDefinitions(props.columns)
        return [
          columns,
          dataTableVisibleColumns(columns, savedState.visibleColumns),
          dataTableColumnOrder(columns, savedState.columnOrder),
          ...dataTableSortColumn(
            columns,
            savedState.sortColumn ?? props.sortColumn,
            savedState.sortReverse ?? props.sortReverse
          )
        ]
      },
      [debug, props.columns, props.sortColumn, props.sortReverse, savedState]
    )

    // Additional UI state variables for filters
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState<DataTableFilterValues>({ })

    // Define the state for the various options we need to track
    const [state, setters] = useComplexState<DataTableState>({
      pageNo: savedState.pageNo ?? pageNo,
      pageSize: savedState.pageSize ?? pageSize,
      sortColumn,
      sortReverse,
      columnOrder,
      visibleColumns,
      filters: savedState.filters || filters
    })

    const toggleFilters: MouseEventHandler<HTMLDivElement> = useCallback(
      e => {
        e.preventDefault()
        e.stopPropagation()
        setShowFilters( sf => ! sf )
      },
      [ ]
    )

    const setFilter = useCallback(
      (name: string, value: DataTableFilterValue) => {
        setFilters(
          filters => {
            const newFilters = { ...filters }
            if (
              hasValue(value) &&
              (isBoolean(value) || value.toString().length)
            ) {
              newFilters[name] = value
            }
            else {
              delete newFilters[name]
            }
            return newFilters
          }
        )
        setters.setPageNo(1)
      },
      [setters]
    )

    // We have to be careful here because listing other dependencies in these
    // useEffect hooks can cause an infinite loop... infinite loop...
    useEffect(
      () => {
        debug(`columns have changed: `, columns)
        setters.setSortColumn(sortColumn)
        setters.setSortReverse(sortReverse)
        setters.setColumnOrder(columnOrder)
        setters.setVisibleColumns(visibleColumns)
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [props.columns]
    )

    useEffect(
      () => {
        debug(`rows, filters or sorting order has changed`)
        setters.setPageNo(1)
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [rows, state.sortColumn, state.sortReverse, state.filters]
    )

    // Save any state changes back to the store, if defined
    useEffect(
      () => {
        if (store) {
          debug(`Saving state in local storage:`, state)
          store.set(storageItem, state)
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [state, store]
    )

    const toggleSortColumn = useCallback(
      (column: string) => {
        if (state.sortColumn === column) {
          debug(`Sort column already set to ${column}, changing direction`)
          setters.setSortReverse( reverse => ! reverse )
        }
        else {
          debug(`Setting sort column to ${column}`)
          setters.setSortColumn(column)
          setters.setSortReverse(false)
        }
      },
      [debug, setters, state.sortColumn]
    )

    const toggleVisibleColumn = useCallback(
      (name: string) => setters.setVisibleColumns(
        visible => {
          const isVisible = splitHash(visible) as Record<string, boolean>
          const result = isVisible[name]
            ? visible
              .filter( item => item !== name )
            : Object
              .keys(columns)
              .filter( item => item === name || isVisible[item] )
          debug(`New visible columns:`, result)
          return result
        }
      ),
      [columns, debug, setters]
    )

    const changeColumnOrder = (ids: string[]) => {
      const newOrder:   string[] = [ ]
      const newVisible: string[] = [ ]
      const isVisible = splitHash(state.visibleColumns) as Record<string, boolean>
      ids.forEach(
        name => {
          newOrder.push(name)
          if (isVisible[name]) {
            newVisible.push(name)
          }
        }
      )
      debug(`New order of all columns:`, newOrder)
      debug(`New order of visible columns:`, newVisible)
      setters.setVisibleColumns(newVisible)
      setters.setColumnOrder(newOrder)
    }

    // Filter, sort and paginate the rows
    const page = useMemo(
      () => dataTablePaginate(
        dataTableSort(
          dataTableFilter(rows, columns, filters),
          columns, state.sortColumn, state.sortReverse
        ),
        state.pageNo, state.pageSize,
      ),
      [
        rows, columns, filters,
        state.sortColumn, state.sortReverse, state.pageNo, state.pageSize
      ]
    )

    // CSS classes
    const contentClass = classes(
      className,
      datatableClass,
      color
    )

    return {
      ...props,
      ...setters,
      ...state,
      columns,
      page,
      showFilters, toggleFilters,
      filters, setFilter,
      toggleSortColumn, toggleVisibleColumn, changeColumnOrder,
      hasFilters: Object.keys(filters).length > 0,
      contentClass,
    }
  }
)

export const {
  Provider: DataTableProvider,
  Consumer: DataTableConsumer,
  Use:      useDataTable
} = DataTableContext

export default DataTableContext

/*
const DataTableContext = ({
  rows=[],
  storageKey,
  storageItem='state',
  debug,
  ...props
}) => {
  // If we have a storageKey defined then create a store and load any
  // previously saved state
  const [store, savedState] = useMemo(
    () => {
      const store = storageKey && Storage(storageKey)
      const savedState = store
        ? store.get(storageItem, { })
        : { }
      return [store, savedState]
    },
    [storageKey]
  )

  // Expand any simple column definition, e.g. 'id name email', into an object
  // mapping column names to a definition object, e.g { id: { ... }, etc }
  const [columns, visibleColumns, columnOrder, sortColumn, sortReverse] = useMemo(
    () => {
      Debug(`computing columns: `, props.columns)
      const columns = dataTableColumnDefinitions(props.columns)
      return [
        columns,
        dataTableVisibleColumns(columns, savedState.visibleColumns),
        dataTableColumnOrder(columns, savedState.columnOrder),
        ...dataTableSortColumn(
          columns,
          savedState.sortColumn ?? props.sortColumn,
          savedState.sortReverse ?? props.sortReverse
        )
      ]
    },
    [props.columns, props.sortColumn, props.sortReverse, savedState]
  )

  // Define the state for the various options we need to track
  const [state, setters] = useComplexState({
    pageNo: savedState.pageNo ?? props.pageNo ?? 1,
    pageSize: savedState.pageSize ?? props.pageSize ?? 10,
    sortColumn,
    sortReverse,
    columnOrder,
    visibleColumns,
  })

  // Additional UI state variables for filters
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({ })

  const toggleFilters = e => {
    e.preventDefault()
    e.stopPropagation()
    setShowFilters( sf => ! sf )
  }

  const setFilter = (name, value) => {
    setFilters(
      filters => {
        const newFilters = { ...filters }
        if (hasValue(value) && (isBoolean(value) || value.length)) {
          newFilters[name] = value
        }
        else {
          delete newFilters[name]
        }
        return newFilters
      }
    )
    setters.setPageNo(1)
  }

  useEffect(
    () => {
      Debug(`columns have changed: `, columns)
      setters.setSortColumn(sortColumn)
      setters.setSortReverse(sortReverse)
      setters.setColumnOrder(columnOrder)
      setters.setVisibleColumns(visibleColumns)
    },
    [sortColumn, sortReverse, columnOrder, visibleColumns]
  )

  useEffect(
    () => {
      Debug(`rows, filters or sorting order has changed`)
      setters.setPageNo(1)
    },
    [rows, state.sortColumn, state.sortReverse, state.filters]
  )

  // Save any state changes back to the store, if defined
  useEffect(
    () => {
      if (store) {
        Debug(`Saving state in local storage:`, state)
        store.set(storageItem, state)
      }
    },
    [state, store]
  )

  const toggleSortColumn = column => {
    if (state.sortColumn === column) {
      Debug(`Sort column already set to ${column}, changing direction`)
      setters.setSortReverse( reverse => ! reverse )
    }
    else {
      Debug(`Setting sort column to ${column}`)
      setters.setSortColumn(column)
      setters.setSortReverse(false)
    }
  }

  const toggleVisibleColumn = name => setters.setVisibleColumns(
    visible => {
      const isVisible = splitHash(visible)
      const result = isVisible[name]
        ? visible
          .filter( item => item !== name )
        : Object
          .keys(columns)
          .filter( item => item === name || isVisible[item] )
      Debug(`New visible columns:`, result)
      return result
    }
  )

  const changeColumnOrder = ids => {
    const newOrder    = [ ]
    const newVisible  = [ ]
    const isVisible = splitHash(state.visibleColumns)
    ids.forEach(
      name => {
        newOrder.push(name)
        if (isVisible[name]) {
          newVisible.push(name)
        }
      }
    )
    Debug(`New order of all columns:`, newOrder)
    Debug(`New order of visible columns:`, newVisible)
    setters.setVisibleColumns(newVisible)
    setters.setColumnOrder(newOrder)
  }

  // Filter, sort and paginate the rows
  const page = useMemo(
    () => dataTablePaginate(
      dataTableSort(
        dataTableFilter(rows, columns, filters),
        columns, state.sortColumn, state.sortReverse
      ),
      state.pageNo, state.pageSize,
    ),
    [
      rows, columns, filters,
      state.sortColumn, state.sortReverse, state.pageNo, state.pageSize
    ]
  )

  // console.log(`render page: `, page);


  return {
    ...props,
    rows, columns, page,
    showFilters, toggleFilters,
    filters, setFilter,
    hasFilters: Object.keys(filters).length,
    toggleSortColumn,
    toggleVisibleColumn,
    changeColumnOrder,
    ...state,
    ...setters
  }
}

const generated = Model(DataTableContext)
export const useDataTable = generated.Use
export const DataTableConsumer = generated.Consumer
export default generated
*/