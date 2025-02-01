import TableRow from './Row'
import TableRows from './Rows'
import { TableBodyProps } from './types'

export const TableBody = ({
  rows,
  Row=TableRow,
  Rows=TableRows,
  ...props
}: TableBodyProps) =>
  <tbody {...props}>
    <Rows
      rows={rows}
      Row={Row}
    />
  </tbody>

export default TableBody
