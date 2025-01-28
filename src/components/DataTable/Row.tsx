import React          from 'react'
import Context        from './Context'
import DataTableCell  from './Cell'
import { doNothing, maybeFunction } from '@abw/badger-utils'

const Row = ({
  row,
  rowIndex,
  columns,
  rowClass,
  onRowClick=doNothing,
  visibleColumns,
  Cell=DataTableCell
}) =>
  <tr
    className={maybeFunction(rowClass, { row, rowIndex })}
    onClick={() => onRowClick({ row, rowIndex })}
  >
    { visibleColumns
      .filter( name => columns[name] )
      .map(
        (name, cellIndex) => {
          const column = columns[name]
          const field  = column.field ?? name
          const value  = row[field]
          return (
            <Cell
              key={name}
              row={row}
              rowIndex={rowIndex}
              index={cellIndex}
              name={name}
              field={field}
              column={column}
              value={value}
            />
          )
        }
      )
    }
  </tr>

export const DataTableRow = Context.Consumer(Row)
export default DataTableRow