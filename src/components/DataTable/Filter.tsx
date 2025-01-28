import Context     from './Context'
import Icon        from '@/components/Icon/Icon'
import Components  from './Filter/index'
import { classes } from '@/src/utils/classes'
import { hasValue, isBoolean } from '@abw/badger-utils'
import { DataTableFilterProps, DataTableFilterValue } from './types'

export const DataTableFilter = Context.Consumer<DataTableFilterProps>(
  ({
    name,
    column,
    filters,
    setFilter,
    filterClass,
    filteringClass,
    filterIcon,
    clearFilterIcon,
  }) => {
    const Component = column.filterComponent
      || (column.filterType && Components[column.filterType])
      || Components[column.type]
      || Components.default

    if (! column.filterable) {
      return <th/>
    }

    return (
      <th
        className={
          classes(
            filterClass,
            hasValue(filters?.[name])
              ? filteringClass
              : null,
          )}
      >
        <div className="flex space middle gap-1">
          <Component
            value={filters[name] ?? ''}
            setFilter={
              (value: DataTableFilterValue) => setFilter(name, value)
            }
            column={column}
            placeholder={column.filterPlaceholder || 'Filter'}
          />
          <Icon
            name={
              (isBoolean(filters[name]) || filters[name])
                ? clearFilterIcon
                : filterIcon
            }
            onClick={
              () => setFilter(name, undefined)
            }
          />
        </div>
      </th>
    )
  }
)

export default DataTableFilter
