import React        from 'react'
import Context      from './Context.js'
import Icon         from '@/components/Icon/Icon.jsx'
import Components   from './Filter/index.jsx'
import { classes }  from '@/src/utils/classes.js'
import { hasValue } from '@abw/badger-utils'

export const Filter = ({
  name,
  column,
  filters,
  setFilter,
  filterClass='filter',
  filteringClass='filtering',
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
        />
        <Icon
          name={clearFilterIcon}
          onClick={() => setFilter(name, null)}
        />
      </div>
    </th>
  )
}

export const DatatableFilter = Context.Consumer(Filter)
export default DatatableFilter
