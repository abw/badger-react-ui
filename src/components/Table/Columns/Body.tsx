import Row from './Row'
import { TableColumnsBodyProps } from '../types'

const Body = ({
  columns,
  rows=[],
  ...props
}: TableColumnsBodyProps) =>
  <tbody {...props}>
    { rows.map(
      (row, n) =>
        <Row
          key={String(row.id ?? n)}
          row={row}
          columns={columns}
        />
    )}
  </tbody>

export default Body