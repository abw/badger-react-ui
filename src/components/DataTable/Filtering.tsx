import Context from './Context'
import Icon    from '@/components/Icon/Icon'
import { classes } from '@/src/utils/classes'
import { maybeFunction } from '@abw/badger-utils'

export const DataTableFiltering = Context.Consumer(
  ({
    showFilters,
    toggleFilters,
    hasFilters,
    filterIcon,
    filterText,
    filteringIcon,
    filterIconClass,
    filterTriggerClass,
    filteringClass,
    hasFiltersClass
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
        { maybeFunction(filterText, hasFilters) as string }
        <Icon
          className={filterIconClass}
          name={showFilters ? filteringIcon : filterIcon}
        />
      </div>
    )
  }
)

export default DataTableFiltering
