import Context        from './Context'
import DataTableCell  from './Cell'
import { doNothing, maybeFunction } from '@abw/badger-utils'
import { DataTableRowProps } from './types'

export const DataTableRow = Context.Consumer<DataTableRowProps>(
  ({
    columns,
    row,
    rowIndex,
    rowClass,
    onRowClick=doNothing,
    visibleColumns,
    Cell=DataTableCell
  }) =>
    <tr
      className={maybeFunction(rowClass, { row, rowIndex }) as string}
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
    </tr>
)

export default DataTableRow