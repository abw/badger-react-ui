import { useState, useMemo, useEffect } from 'react'
import { Generator } from '@abw/react-context'
import { doNothing, hasValue, splitHash } from '@abw/badger-utils'
import { Storage, useComplexState } from '@/src/index.jsx'
import {
  datatableColumnDefinitions,
  datatableVisibleColumns,
  datatableSort, datatablePaginate, datatableFilter,
  datatableSortColumn,
  datatableColumnOrder,
} from './Utils/index.js'

const DatatableContext = ({
  render,
  rows=[],
  storageKey,
  storageItem='state',
  debug,
  ...props
}) => {
  const Debug = debug
    ? console.log
    : doNothing

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
      const columns = datatableColumnDefinitions(props.columns)
      return [
        columns,
        datatableVisibleColumns(columns, savedState.visibleColumns),
        datatableColumnOrder(columns, savedState.columnOrder),
        ...datatableSortColumn(
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
    let newOrder    = [ ]
    let newVisible  = [ ]
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

  // Additional UI state variables for filters
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({ })
  //const [controlsVisible, setControlsVisible] = useState(false)
  //const showControls = () => setControlsVisible(true)
  //const hideControls = () => setControlsVisible(false)

  const toggleFilters = e => {
    e.preventDefault()
    e.stopPropagation()
    setShowFilters( sf => ! sf )
  }

  const setFilter = (name, value) => {
    setFilters(
      filters => {
        const newFilters = { ...filters }
        if (hasValue(value) && value.length) {
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

  // Filter, sort and paginate the rows
  const page = useMemo(
    () => datatablePaginate(
      datatableSort(
        datatableFilter(rows, columns, filters),
        columns, state.sortColumn, state.sortReverse
      ),
      state.pageNo, state.pageSize,
    ),
    [
      rows, columns, filters,
      state.sortColumn, state.sortReverse, state.pageNo, state.pageSize
    ]
  )

  return render({
    ...props,
    rows, columns, page,
    showFilters, toggleFilters,
    filters, setFilter,
    toggleSortColumn,
    toggleVisibleColumn,
    changeColumnOrder,
    ...state,
    ...setters
  })
}

const generated = Generator(DatatableContext)
export const useDatatable = generated.Use
export default generated