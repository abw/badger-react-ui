import React   from 'react'
import Context from './Context.js'
import DataTableFilter from './Filter.jsx'

export const Filters = ({
  columns,
  filtersClass='filters',
  visibleColumns,
  Filter=DataTableFilter,
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
