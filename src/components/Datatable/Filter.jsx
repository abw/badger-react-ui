import React   from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes.js'
import { hasValue } from '@abw/badger-utils'
import Icon from '../Icon/Icon.jsx'

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

export default Context.Consumer(Filter)
