import React        from 'react'
import Context      from './Context.js'
import Icon         from '@/components/Icon/Icon.jsx'
import { inflect, maybeFunction }  from '@abw/badger-utils'
import { classes }  from '@/src/utils/classes.js'

export const Filtering = ({
  showFilters,
  toggleFilters,
  hasFilters,
  filterIcon='filter',
  filterText = n => n ? inflect(n, 'Filter') : 'Filter',
  filteringIcon='filter',
  filterIconClass='filter-icon',
  filterTriggerClass='small flex gap-2 middle trigger',
  filteringClass='filtering',
  hasFiltersClass='has-filters'
}) => {
  return (
    <div
      className={
        classes(
          filterTriggerClass,
          {
            [filteringClass]: showFilters,
            [hasFiltersClass]: hasFilters,
          }
        )
      }
      onClick={toggleFilters}
    >
      { maybeFunction(filterText, hasFilters) }
      <Icon
        className={filterIconClass}
        name={showFilters ? filteringIcon : filterIcon}
      />
    </div>
  )
}

export const DataTableFiltering = Context.Consumer(Filtering)
export default DataTableFiltering
