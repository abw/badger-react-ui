import React   from 'react'
import Context from './Context.js'
import DefaultFilter from './Filter.jsx'
import { FILTERS } from './Constants.js'

export const Filters = ({
  columns,
  filtersClass=FILTERS,
  visibleColumns,
  Filter=DefaultFilter,
}) =>
  <thead>
    <tr className={filtersClass}>
      { visibleColumns.map(
        name =>
          <Filter
            key={name}
            name={name}
            column={columns[name]}
          />
      )}
    </tr>
  </thead>

export const DataTableFilters = Context.Consumer(Filters)
export default DataTableFilters
