import React   from 'react'
import Context from './Context.js'
import Icon  from '@/components/Icon/Icon.jsx'
import { classes } from '@/src/utils/classes.js'
import { hasValue } from '@abw/badger-utils'

export const Heading = ({
  name,
  column,
  sortColumn,
  sortReverse,
  toggleSortColumn,
  sortUpIcon='arrow-up',
  sortDownIcon='arrow-down',
  unsortedIcon='arrows',
  sortIconClass=`sort-icon`,
  sortingClass='sorting',
  showFilters,
  toggleFilters,
  filters,
  filteringClass='filtering',
  filterIcon='filter',
  filteringIcon='filter-solid',
  filterIconClass='filter-icon',
  headingClass='heading',
  rightClass='right'
}) => {
  const sorting = name === sortColumn
  const reverse = sorting && sortReverse
  const filtering = hasValue(filters[name])
  return (
    <th
      className={
        classes(
          headingClass,
          column.right ? rightClass : null,
          showFilters ? filteringClass : null,    // TODO: filters[column]
          filtering ? filteringClass : null,
          sorting ? sortingClass : null
        )}
      onClick={() => toggleSortColumn(name)}
    >
      <div className="flex space middle">
        <span className="label">{column.label}</span>
        <div className="flex gap-1">
          <Icon
            className={filterIconClass}
            name={filtering ? filteringIcon : filterIcon}
            onClick={toggleFilters}
          />
          <Icon
            className={sortIconClass}
            name={
              sorting
                ? reverse ? sortUpIcon : sortDownIcon
                : unsortedIcon
            }
          />
        </div>
      </div>
    </th>
  )
}

export default Context.Consumer(Heading)
