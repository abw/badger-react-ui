import Context from './Context'
import DefaultFilter from './Filter'

export const DataTableFilters = Context.Consumer(
  ({
    columns,
    filtersClass,
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
)

export default DataTableFilters
