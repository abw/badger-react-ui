import TableRow from './Row'
import { rowProps } from './Utils'
import { TableHeadProps } from './types'

const TableHead = ({
  headRows,
  Row=TableRow,
  HeadRow=Row,
  ...props
}: TableHeadProps) =>
  <thead>
    { headRows.map(
      (row, n) =>
        <HeadRow
          key={row.key ?? n}
          th
          {...rowProps(row)}
          {...props}
        />
    )}
  </thead>

export default TableHead