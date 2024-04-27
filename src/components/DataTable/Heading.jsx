import React        from 'react'
import Context      from './Context.js'
import Icon         from '@/components/Icon/Icon.jsx'
import { classes }  from '@/src/utils/classes.js'
import { alignClasses } from './Utils/Align.js'
import { FILTERING, HEADING, SORTING } from './Constants.js'
import { hasValue } from '@abw/badger-utils'

export const Heading = ({
  name,
  column,
  filters,
  sortColumn,
  sortReverse,
  toggleSortColumn,
  sortUpIcon='arrow-up',
  sortDownIcon='arrow-down',
  unsortedIcon='arrows',
  sortIconClass=`sort-icon`,
  sortingClass=SORTING,
  headingClass=HEADING,
  filteringClass=FILTERING
}) => {
  const sorting = name === sortColumn
  const reverse = sorting && sortReverse
  return (
    <th
      className={
        classes(
          headingClass,
          sorting ? sortingClass : null,
          hasValue(filters[name]) ? filteringClass : null,
          column.right && alignClasses.right,
          column.center && alignClasses.center,
          column.align && alignClasses[column.align]
        )}
      onClick={() => toggleSortColumn(name)}
    >
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
  )
}


export const DataTableHeading = Context.Consumer(Heading)
export default DataTableHeading
