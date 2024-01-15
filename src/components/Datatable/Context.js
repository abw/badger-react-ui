import { useState, useMemo } from 'react'
import { Generator } from '@abw/react-context'
import { hasValue, splitHash } from '@abw/badger-utils'
import {
  datatableVisibleColumns, datatableColumnDefinitions,
  datatableSort, datatablePaginate, datatableFilter
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

  const [pageNo, setPageNo] = useState(props.pageNo ?? 1)
  const [pageSize, setPageSize] = useState(props.pageSize ?? 10)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({ })
  const [sortColumn, setSortColumn] = useState(props.sortColumn)
  const [sortReverse, setSortReverse] = useState(props.sortReverse ?? false)
  const [visibleColumns, setVisibleColumns] = useState(datatableVisibleColumns(columns))
  const [controlsVisible, setControlsVisible] = useState(false)
  const showControls = () => setControlsVisible(true)
  const hideControls = () => setControlsVisible(false)

  const toggleSortColumn = column => {
    if (sortColumn === column) {
      setSortReverse( reverse => ! reverse )
    }
    else {
      setSortColumn(column)
      setSortReverse(false)
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
    setPageNo(1)
  }

  const toggleVisibleColumn = name =>
    setVisibleColumns(
      visible => {
        const isVisible = splitHash(visible)
        console.log(`visible: `, visible)
        console.log(`isVisible: `, isVisible)

        return isVisible[name]
          ? visible
            .filter( item => item !== name )
          : Object
            .keys(columns)
            .filter( item => item === name || isVisible[item] )
      }
    )

  const page = useMemo(
    () => datatablePaginate(
      datatableSort(
        datatableFilter(rows, columns, filters),
        columns, sortColumn, sortReverse
      ),
      pageNo, pageSize,
    ),
    [rows, columns, filters, sortColumn, sortReverse, pageNo, pageSize]
  )


  return render({
    ...props,
    rows, columns, page,
    pageNo, setPageNo,
    pageSize, setPageSize,
    showFilters, toggleFilters,
    filters, setFilter,
    sortColumn, setSortColumn,
    sortReverse, setSortReverse,
    toggleSortColumn,
    visibleColumns, setVisibleColumns, toggleVisibleColumn,
    controlsVisible, showControls, hideControls
  })
}

const generated = Generator(DatatableContext)
export const useDatatable = generated.Use
export default generated