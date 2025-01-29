import Context  from './Context'
import defaultDisplayTypes from './Display'
import { classes } from '@/src/utils/classes'
import { FILTERING, SORTING } from './constants'
import { hasValue, maybeFunction } from '@abw/badger-utils'
import { DataTableCellProps } from './types'
import { alignClasses } from '@/src/utils'

export const DataTableCell = Context.Consumer<DataTableCellProps>(
  ({
    row,
    column,
    name,
    value,
    rowIndex,
    cellIndex,
    cellClass,
    filters,
    sortColumn,
    sortingClass=SORTING,
    filteringClass=FILTERING,
    displayTypes=defaultDisplayTypes
  }) => {
    const type    = column.type    || 'text'
    const Display = column.display || displayTypes[type] || displayTypes.default
    const sorting = sortColumn === name
    const classname = classes(
      cellClass,
      maybeFunction(column.className, { row, column, value, name, rowIndex, cellIndex }) as string,
      sorting ? sortingClass : null,
      hasValue(filters[name]) ? filteringClass : null,
      column.right ? alignClasses.right : null,
      column.center ? alignClasses.center : null,
      column.align && alignClasses[column.align]
    )
    return (
      <td className={classname}>
        <Display
          row={row}
          column={column}
          value={value}
          name={name}
          field={name}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
        />
      </td>
    )
  }
)

export default DataTableCell