import React   from 'react'
import Context from './Context'
import DefaultFilter from './Filter'
import { FILTERS } from './constants'

export const Filters = ({
  columns,
  filtersClass=FILTERS,
  visibleColumns,
  Filter=DefaultFilter,
}) =>
  <thead>
    <tr className={filtersClass}>
      { visibleColumns
        .filter( name => columns[name] )
        .map(
          name =>
            <Filter
              key={name}
              name={name}
              column={columns[name]}
            />
        )
      }
    </tr>
  </thead>

export const DataTableFilters = Context.Consumer(Filters)
export default DataTableFilters
