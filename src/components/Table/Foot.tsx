import TableRow from './Row'
import { rowProps } from './Utils'
import { TableFootProps } from './types'

export const TableFoot = ({
  footRows,
  Row=TableRow,
  FootRow=Row,
  ...props
}: TableFootProps) =>
  <tfoot {...props}>
    { footRows
      .map(
        row => rowProps(row)
      )
      .map(
        (row, n) =>
          <FootRow
            key={row.key ?? n}
            {...row}
          />
      )
    }
  </tfoot>

export default TableFoot