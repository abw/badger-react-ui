import React from 'react'
import Context from '../DataTable/Context.js'
import defaultDisplayTypes from '../DataTable/Display.jsx'
import { classes } from '@/src/utils/classes.js'
import { alignClasses } from '../DataTable/Utils/Align.js'
import { FILTERING, SORTING, HEADING } from '../DataTable/Constants.js'
import { hasValue, maybeFunction } from '@abw/badger-utils'
import Icon from '../Icon/Icon.jsx'


const Row = ({
  row,
  column,
  name,
  value,
  rowIndex,
  cellIndex,
  cellClass,
  filters,
  sortColumn,
  sortReverse,
  sortUpIcon='arrow-up',
  sortDownIcon='arrow-down',
  unsortedIcon='arrows',
  sortIconClass=`sort-icon`,
  toggleSortColumn,
  headingClass=HEADING,
  sortingClass=SORTING,
  filteringClass=FILTERING,
  displayTypes=defaultDisplayTypes
}) => {
  const type    = column.type    || 'text'
  const Display = column.display || displayTypes[type] || displayTypes.default
  const sorting = sortColumn === name
  const reverse = sorting && sortReverse
  const sharedClasses = [
    sorting ? sortingClass : null,
    hasValue(filters[name]) ? filteringClass : null,
    column.right && alignClasses.right,
    column.center && alignClasses.center,
    column.align && alignClasses[column.align]
  ]
  const headclass = classes(
    'split-3',
    headingClass,
    ...sharedClasses
  )
  const cellclass = classes(
    cellClass,
    maybeFunction(column.className, { row, column, value, name, rowIndex, cellIndex }),
    ...sharedClasses
  )
  return (
    <tr>
      <th className={headclass} onClick={() => toggleSortColumn(name)}>
        <div className="flex space middle">
          <span className="wide label">{column.heading}</span>
          <Icon
            className={sortIconClass}
            name={
              sorting
                ? reverse ? sortUpIcon : sortDownIcon
                : unsortedIcon
            }
          />
        </div>
      </th>
      <td className={cellclass}>
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
    </tr>
  )
}

export default Context.Consumer(Row)