import Cell from '../Cell'
import { cellProps } from '../Utils'
import { TableColumnsHeadProps } from '../types'

const Head = ({
  columns,
  // TODO: Cell
  ...props
}: TableColumnsHeadProps) =>
  <thead {...props}>
    <tr>
      { Object.entries(columns).map(
        ([name, column]) => {
          const cell = column.head
            ? cellProps(column.head)
            : { text: name }
          return (
            <Cell
              key={name}
              th={cell.th ?? true}
              {...cell}
            />
          )
        }
      )}
    </tr>
  </thead>

export default Head