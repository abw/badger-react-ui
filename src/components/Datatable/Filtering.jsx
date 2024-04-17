import React        from 'react'
import Context      from './Context.js'
import Icon         from '@/components/Icon/Icon.jsx'
import { classes } from '@/src/utils/classes.js'

export const Filtering = ({
  showFilters,
  toggleFilters,
  filterIcon='filter',
  filterText='Filter',
  filteringIcon='filter',
  filterIconClass='filter-icon',
  filterTriggerClass='small flex gap-2 middle trigger',
  filteringClass='filtering'
}) => {
  return (
    <div
      className={classes(filterTriggerClass, { [filteringClass]: showFilters })}
      onClick={toggleFilters}
    >
      {filterText}
      <Icon
        className={filterIconClass}
        name={showFilters ? filteringIcon : filterIcon}
      />
    </div>
  )
}

export const DatatableFiltering = Context.Consumer(Filtering)
export default DatatableFiltering
