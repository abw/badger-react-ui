import React   from 'react'
import Context from './Context.js'
import DatatableFilter from './Filter.jsx'

export const Filters = ({
  columns,
  filtersClass='filters',
  visibleColumns,
  Filter=DatatableFilter,
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

export const DatatableFilters = Context.Consumer(Filters)
export default DatatableFilters
