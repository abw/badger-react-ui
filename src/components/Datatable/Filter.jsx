import React        from 'react'
import Context      from './Context.js'
import Icon         from '@/components/Icon/Icon.jsx'
import { classes }  from '@/src/utils/classes.js'
import { hasValue } from '@abw/badger-utils'

export const Filter = ({
  name,
  filters,
  setFilter,
  filterClass='filter',
  filteringClass='filtering',
  clearFilterIcon='cross'
}) => {
  return (
    <th
      className={
        classes(
          filterClass,
          hasValue(filters[name]) ? filteringClass : null,
        )}
    >
      <div className="flex space middle gap-1">
        <input
          type="text"
          value={filters[name] ?? ''}
          onChange={e => setFilter(name, e.target.value)}
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
