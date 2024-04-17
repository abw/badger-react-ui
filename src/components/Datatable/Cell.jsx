import React    from 'react'
import Context  from './Context.js'
import defaultDisplayTypes from './Display.jsx'
import { classes } from '@/src/utils/classes.js'
import { alignClasses } from './Utils/Align.js'

const Cell = ({
  row,
  column,
  name,
  value,
  cellClass,
  sortColumn,
  sortingClass='sorting',
  displayTypes=defaultDisplayTypes
}) => {
  const type    = column.type    || 'text'
  const Display = column.display || displayTypes[type] || displayTypes.default
  const sorting = sortColumn === name
  const classname = classes(
    cellClass,
    column.className,
    sorting ? sortingClass : null,
    column.right && alignClasses.right,
    column.center && alignClasses.center,
    column.align && alignClasses[column.align]
  )
  return (
    <td className={classname}>
      {/* {value} */}
      <Display
        row={row}
        column={column}
        value={value}
        name={name}
        field={name}
      />
    </td>
  )
}

export const DatatableCell = Context.Consumer(Cell)
export default DatatableCell