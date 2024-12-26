import React from 'react'
import Context from '../DataTable/Context.js'
import Row from './Row.jsx'

const Table = ({
  row,
  rowIndex,
  columns,
  visibleColumns,
  tableClass='wide celled shaded small'
}) =>
  <table className={tableClass}>
    <tbody>
      { visibleColumns
        .filter( name => columns[name] )
        .map(
          (name, cellIndex) => {
            const column = columns[name]
            const field  = column.field ?? name
            const value  = row[field]
            return (
              <Row
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
    </tbody>
  </table>

export default Context.Consumer(Table)