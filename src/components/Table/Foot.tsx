import TableRow from './Row'
import { rowProps } from './Utils'
import { TableFootProps } from './types'

const TableFoot = ({
  footRows,
  Row=TableRow,
  FootRow=Row,
  ...props
}: TableFootProps) =>
  <tfoot>
    { footRows.map(
      (row, n) =>
        <FootRow
          key={row.key ?? n}
          {...rowProps(row)}
          {...props}
        />
    )}
  </tfoot>

export default TableFoot