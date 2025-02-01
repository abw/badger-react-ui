import TableRow from './Row'
import TableRows from './Rows'
import { TableFootProps } from './types'

export const TableFoot = ({
  rows,
  Row=TableRow,
  Rows=TableRows,
  ...props
}: TableFootProps) =>
  <tfoot {...props}>
    <Rows
      rows={rows}
      Row={Row}
    />
  </tfoot>

export default TableFoot