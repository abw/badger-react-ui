import React    from 'react'
import Context  from './Context.js'
import { classes } from '@/src/utils/classes.js'

const Cell = ({
  column,
  name,
  value,
  cellClass,
  sortColumn,
  sortingClass='sorting'
}) => {
  // const type    = column.type    || 'text';
  // const Display = column.display || displayTypes[type] || displayTypes.default;
  const sorting = sortColumn === name
  const classname = classes(
    cellClass,
    column.className,
    sorting ? sortingClass : null,
    column.right ? 'text-right' : null,
  )
  return (
    <td className={classname}>
      {value}
      {/* <Display row={row} column={column} name={name} field={field} value={value}/> */}
    </td>
  )
}

export default Context.Consumer(Cell)