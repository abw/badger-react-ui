import { useState, useMemo } from 'react'
import { Generator } from '@abw/react-context'
import { paginate, extractVisibleColumns, columnDefinitions, sort } from './Utils.js'

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
  const [sortColumn, setSortColumn] = useState(props.sortColumn)
  const [sortReverse, setSortReverse] = useState(props.sortReverse ?? false)
  const [visibleColumns, setVisibleColumns] = useState(extractVisibleColumns(columns))

  const toggleSortColumn = column => {
    if (sortColumn === column) {
      setSortReverse( reverse => ! reverse )
    }
    else {
      setSortColumn(column)
      setSortReverse(false)
    }
  }

  const page = useMemo(
    () => paginate(
      sort(rows, columns, sortColumn, sortReverse),
      pageNo, pageSize,
    ),
    [rows, pageNo, pageSize, sortColumn, sortReverse]
  )
  console.log(`page:`, page)
  console.log(`columns:`, columns)


  return render({
    ...props,
    rows, columns, page,
    pageNo, setPageNo,
    pageSize, setPageSize,
    sortColumn, setSortColumn,
    sortReverse, setSortReverse,
    toggleSortColumn,
    visibleColumns, setVisibleColumns,
  })
}

const generated = Generator(DatatableContext)
export const useDatatable = generated.Use
export default generated