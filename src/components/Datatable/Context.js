import { useState, useMemo } from 'react'
import { Generator } from '@abw/react-context'
import { hasValue, splitHash } from '@abw/badger-utils'
import {
  datatableColumnDefinitions,
  datatableSort, datatablePaginate, datatableFilter, State
} from './Utils/index.js'

const DatatableContext = ({
  render,
  rows=[],
  ...props
}) => {
  const columns = useMemo(
    () => datatableColumnDefinitions(props.columns),
    [props.columns]
  )
  const state = State({ ...props, columns })

  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({ })
  const [controlsVisible, setControlsVisible] = useState(false)
  const showControls = () => setControlsVisible(true)
  const hideControls = () => setControlsVisible(false)

  const toggleSortColumn = column => {
    if (state.sortColumn === column) {
      state.setSortReverse(! state.sortReverse)
    }
    else {
      state.setSortColumn(column)
      state.setSortReverse(false)
    }
  }

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
    state.setPageNo(1)
  }

  const toggleVisibleColumn = name => {
    const isVisible = splitHash(state.visibleColumns)
    state.setVisibleColumns(
      isVisible[name]
        ? state.visibleColumns
          .filter( item => item !== name )
        : Object
          .keys(columns)
          .filter( item => item === name || isVisible[item] )
    )
  }

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
    state.setVisibleColumns(newVisible)
    state.setColumnOrder(newOrder)
  }

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
    controlsVisible, showControls, hideControls,
    toggleVisibleColumn,
    changeColumnOrder,
    ...state
  })
}

const generated = Generator(DatatableContext)
export const useDatatable = generated.Use
export default generated