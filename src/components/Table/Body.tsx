import TableRow from './Row'
import { rowProps } from './Utils'
import { TableBodyProps } from './types'

const TableBody = ({
  bodyRows,
  Row=TableRow,
  BodyRow=Row,
  ...props
}: TableBodyProps) =>
  <tbody>
    { bodyRows.map(
      (row, n) =>
        <BodyRow
          key={row.key ?? n}
          {...rowProps(row)}
          {...props}
        />
    )}
  </tbody>

export default TableBody