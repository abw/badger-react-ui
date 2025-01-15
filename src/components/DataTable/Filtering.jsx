import React        from 'react'
import Context      from './Context.js'
import Icon         from '@/components/Icon/Icon'
import { inflect, maybeFunction }  from '@abw/badger-utils'
import { classes }  from '@/src/utils/classes'
import { FILTER, FILTERING, FILTER_ICON, HAS_FILTERS } from './Constants.js'

export const Filtering = ({
  showFilters,
  toggleFilters,
  hasFilters,
  filterIcon=FILTER,
  filterText = n => n ? inflect(n, 'Filter') : 'Filter',
  filteringIcon=FILTER,
  filterIconClass=FILTER_ICON,
  filterTriggerClass='small flex gap-2 middle trigger',
  filteringClass=FILTERING,
  hasFiltersClass=HAS_FILTERS
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
