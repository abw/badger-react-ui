import TableRow from './Row'
import TableRows from './Rows'
import { TableHeadProps } from './types'

export const TableHead = ({
  rows,
  Row=TableRow,
  Rows=TableRows,
  ...props
}: TableHeadProps) =>
  <thead {...props}>
    <Rows
      rows={rows}
      Row={Row}
      th
    />
  </thead>

export default TableHead