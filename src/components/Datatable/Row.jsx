import React          from 'react'
import Context        from './Context.js'
import DatatableCell  from './Cell.jsx'
import { doNothing, maybeFunction } from '@abw/badger-utils'

const Row = ({
  row,
  columns,
  rowClass,
  onRowClick=doNothing,
  visibleColumns,
  Cell=DatatableCell
}) =>
  <tr className={maybeFunction(rowClass, row)} onClick={() => onRowClick(row)}>
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

export const DatatableRow = Context.Consumer(Row)
export default DatatableRow