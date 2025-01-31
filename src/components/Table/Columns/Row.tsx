import Cell from './Cell'
import { cellProps } from '../Utils'
import { TableCellProps, TableColumnsRowProps } from '../types'

const Row = ({
  row,
  columns,
}: TableColumnsRowProps) =>
  <tr>
    { Object.entries(columns).map(
      ([name, column]) => {
        const cell = column.body
          ? cellProps(column.body)
          : { text: row[name] } as TableCellProps
        return (
          <Cell
            key={name}
            th={cell.th ?? false}
            row={row}
            {...cell}
          />
        )
      }
    )}
  </tr>

export default Row