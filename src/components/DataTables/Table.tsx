import Context from '@/components/DataTable/Context'
import Row from './Row'
import { DataTablesTableProps } from './types'

export const DataTablesTable = Context.Consumer<DataTablesTableProps>(
  ({
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
                  cellIndex={cellIndex}
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
)

export default DataTablesTable