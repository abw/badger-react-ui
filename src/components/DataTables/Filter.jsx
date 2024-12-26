import React   from 'react'
import Context from '../DataTable/Context.js'
import Components   from '../DataTable/Filter/index.jsx'
import Icon         from '@/components/Icon/Icon.jsx'
import { classes }  from '@/src/utils/classes.js'
import { CROSS, FILTER, FILTERING } from '../DataTable/Constants.js'
import { hasValue, isBoolean } from '@abw/badger-utils'

export const Filter = ({
  name,
  column,
  filters,
  setFilter,
  filterClass=FILTER,
  filteringClass=FILTERING,
  filterIcon=FILTER,
  clearFilterIcon=CROSS,
}) => {
  const Component = column.filterComponent
    || Components[column.filterType]
    || Components[column.type]
    || Components.default

  return (
    <div
      className={
        classes(
          filterClass,
          'field mar-v-none',
          hasValue(filters?.[name])
            ? filteringClass
            : null,
        )}
    >
      <label>{column.heading}</label>
      <div className="inputs">
        <Component
          value={filters[name] ?? ''}
          setFilter={value => setFilter(name, value)}
          column={column}
          placeholder={column.filterPlaceholder || 'Filter'}
        />
        <div className="suffix">
          <Icon
            name={
              (isBoolean(filters[name]) || filters[name])
                ? clearFilterIcon
                : filterIcon
            }
            onClick={() => setFilter(name, null)}
          />
        </div>
      </div>
    </div>
  )
}

export default Context.Consumer(Filter)
