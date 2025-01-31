import TableRow from './Row'
import { rowProps } from './Utils'
import { TableBodyProps } from './types'

export const TableBody = ({
  bodyRows,
  Row=TableRow,
  BodyRow=Row,
  ...props
}: TableBodyProps) =>
  <tbody {...props}>
    { bodyRows
      .map(
        row => rowProps(row)
      )
      .map(
        (row, n) =>
          <BodyRow
            key={row.key ?? n}
            {...row}
          />
      )
    }
  </tbody>

export default TableBody