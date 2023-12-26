import React    from 'react'
import Context  from './Context.js'
import DatatableCell from './Cell.jsx'

const Row = ({
  row,
  columns,
  visibleColumns,
  Cell=DatatableCell
}) =>
  <tr>
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

export default Context.Consumer(Row)