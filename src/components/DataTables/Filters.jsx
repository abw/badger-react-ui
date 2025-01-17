import React   from 'react'
import Context from '../DataTable/Context.js'
import DefaultFilter from './Filter.jsx'
import { FILTERS } from '../DataTable/Constants.js'
import Tiles from '@/components/Tiles/Tiles'

export const Filters = ({
  columns,
  filtersClass=FILTERS,
  visibleColumns,
  Filter=DefaultFilter,
  minFilterWidth='12rem',
  filterGap='2'
}) =>
  <div className={filtersClass}>
    <Tiles minWidth={minFilterWidth} gap={filterGap}>
      { visibleColumns
        .filter( name => columns[name]?.filterable )
        .map(
          name =>
            <Filter
              key={name}
              name={name}
              column={columns[name]}
            />
        )
      }
    </Tiles>
  </div>

export default Context.Consumer(Filters)
