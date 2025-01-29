import Context from '../DataTable/Context'
import DefaultFilter from './Filter'
import { FILTERS } from '../DataTable/constants'
import Tiles from '@/components/Tiles/Tiles'
import { DataTablesFiltersProps } from './types'

export const DataTablesFilters = Context.Consumer<DataTablesFiltersProps>(
  ({
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
)

export default DataTablesFilters
