import { useState, useMemo } from 'react'
import { Generator } from '@abw/react-context'
import { paginate, extractVisibleColumns, columnDefinitions, sort } from './Utils.js'
import { hasValue } from '@abw/badger-utils'

const DatatableContext = ({
  render,
  rows=[],
  ...props
}) => {
  const columns = useMemo(
    () => columnDefinitions(props.columns),
    [props.columns]
  )

  const [pageNo, setPageNo] = useState(props.pageNo ?? 1)
  const [pageSize, setPageSize] = useState(props.pageSize ?? 10)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({ })
  const [sortColumn, setSortColumn] = useState(props.sortColumn)
  const [sortReverse, setSortReverse] = useState(props.sortReverse ?? false)
  const [visibleColumns, setVisibleColumns] = useState(extractVisibleColumns(columns))
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

  const page = useMemo(
    () => paginate(
      sort(rows, columns, sortColumn, sortReverse),
      pageNo, pageSize,
    ),
    [rows, pageNo, pageSize, sortColumn, sortReverse]
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
    visibleColumns, setVisibleColumns,
    controlsVisible, showControls, hideControls
  })
}

const generated = Generator(DatatableContext)
export const useDatatable = generated.Use
export default generated