import React    from 'react'
import Context  from './Context.js'
import defaultDisplayTypes from './Display.jsx'
import { classes } from '@/src/utils/classes'
import { alignClasses } from './Utils/Align.js'
import { FILTERING, SORTING } from './Constants.js'
import { hasValue, maybeFunction } from '@abw/badger-utils'

const Cell = ({
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
    maybeFunction(column.className, { row, column, value, name, rowIndex, cellIndex }),
    sorting ? sortingClass : null,
    hasValue(filters[name]) ? filteringClass : null,
    column.right && alignClasses.right,
    column.center && alignClasses.center,
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

export const DataTableCell = Context.Consumer(Cell)
export default DataTableCell