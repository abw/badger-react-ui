import TableRow from './Row'
import { tableRowProps } from './Utils'
import { TableRowsProps } from './types'

export const TableRows = ({
  rows,
  th=false,
  Row=TableRow,
}: TableRowsProps) =>
  rows
    .map(
      row => tableRowProps(row)
    )
    .map(
      (row, n) =>
        <Row
          key={row.key ?? n}
          th={th}
          {...row}
        />
    )

export default TableRows