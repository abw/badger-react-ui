import TableCell from './Cell'
import { tableCellProps } from './Utils'
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
        cell => tableCellProps(cell)
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