import Row from './Row'
import { TableColumnBodyProps } from '../types'

const Body = ({
  columns,
  rows=[],
  ...props
}: TableColumnBodyProps) =>
  <tbody>
    { rows.map(
      (row, n) =>
        <Row
          key={row.id ?? n}
          row={row}
          columns={columns}
          {...props}
        />
    )}
  </tbody>

export default Body