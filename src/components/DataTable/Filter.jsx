import React        from 'react'
import Context      from './Context.js'
import Icon         from '@/components/Icon/Icon.jsx'
import Components   from './Filter/index.jsx'
import { classes }  from '@/src/utils/classes.js'
import { hasValue, isBoolean } from '@abw/badger-utils'

export const Filter = ({
  name,
  column,
  filters,
  setFilter,
  filterClass='filter',
  filteringClass='filtering',
  filterIcon='filter',
  clearFilterIcon='cross',
}) => {
  const Component = column.filterComponent
    || Components[column.type]
    || Components.default

  return (
    <th
      className={
        classes(
          filterClass,
          hasValue(filters[name]) ? filteringClass : null,
        )}
    >
      <div className="flex space middle gap-1">
        <Component
          value={filters[name] ?? ''}
          setFilter={value => setFilter(name, value)}
          column={column}
          placeholder={column.filterPlaceholder || 'Filter'}
        />
        <Icon
          name={
            (isBoolean(filters[name]) || filters[name])
              ? clearFilterIcon
              : filterIcon
          }
          onClick={() => setFilter(name, null)}
        />
      </div>
    </th>
  )
}

export const DataTableFilter = Context.Consumer(Filter)
export default DataTableFilter
