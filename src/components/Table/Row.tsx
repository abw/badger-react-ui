import TableCell from './Cell'
import { cellProps } from './Utils'
import { TableRowProps } from './types'

export const TableRow = ({
  cells,
  th=false,
  Cell=TableCell,
  ...props
}: TableRowProps) =>
  <tr {...props}>
    { cells
      .map(
        cell => cellProps(cell)
      )
      .map(
        (cell, n) =>
          <Cell
            key={cell.key ?? n}
            th={cell.th ?? th}
            {...cell}
          />
      )}
  </tr>

export default TableRow