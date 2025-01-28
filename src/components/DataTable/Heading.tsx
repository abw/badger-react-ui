import React        from 'react'
import Context      from './Context'
import Icon         from '@/components/Icon/Icon'
import { classes }  from '@/src/utils/classes'
import { alignClasses } from './Utils/Align'
import { FILTERING, HEADING, SORTING } from './constants'
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
  const sorting  = name === sortColumn
  const reverse  = sorting && sortReverse
  const sortable = column.sortable
  const onClick  = sortable
    ? () => toggleSortColumn(name)
    : null

  return (
    <th
      className={
        classes(
          headingClass,
          sorting ? sortingClass : null,
          { sortable },
          hasValue(filters[name]) ? filteringClass : null,
          column.right && alignClasses.right,
          column.center && alignClasses.center,
          column.align && alignClasses[column.align]
        )}
      onClick={onClick}
    >
      <div className="flex space middle">
        <span className="wide label">{column.heading}</span>
        { Boolean(column.sortable) &&
          <Icon
            className={sortIconClass}
            name={
              sorting
                ? reverse ? sortUpIcon : sortDownIcon
                : unsortedIcon
            }
          />
        }
      </div>
    </th>
  )
}


export const DataTableHeading = Context.Consumer(Heading)
export default DataTableHeading
