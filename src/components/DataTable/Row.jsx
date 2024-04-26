import React          from 'react'
import Context        from './Context.js'
import DataTableCell  from './Cell.jsx'
import { doNothing, maybeFunction } from '@abw/badger-utils'

const Row = ({
  row,
  columns,
  rowClass,
  extra={},
  onRowClick=doNothing,
  visibleColumns,
  Cell=DataTableCell
}) =>
  <tr
    className={maybeFunction(rowClass, { row, ...extra })}
    onClick={() => onRowClick({ row, ...extra })}
  >
    { visibleColumns.map(
      name => {
        const column = columns[name]
        const field  = column.field ?? name
        const value  = row[field]
        return (
          <Cell
            key={name}
            row={row}
            name={name}
            field={field}
            column={column}
            value={value}
          />
        )
      }
    )}
  </tr>

export const DataTableRow = Context.Consumer(Row)
export default DataTableRow