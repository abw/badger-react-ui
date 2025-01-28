import Context            from './Context'
import DataTableRows      from './Rows'
import DataTableHeadings  from './Headings'
import DataTableFilters   from './Filters'
import { classes }        from '@/src/utils/classes'

export const DataTableTable = Context.Consumer(
  ({
    tableClass,
    selectableClass,
    scrollX,
    onRowClick,
    showFilters,
    Headings=DataTableHeadings,
    Filters=DataTableFilters,
    Rows=DataTableRows
  }) =>
    <table
      className={classes(
        tableClass,
        scrollX ? 'wide nowrap' : 'wide',
        {
          [selectableClass]: onRowClick,
        }
      )}
    >
      <Headings/>
      { showFilters &&
      <Filters/>
      }
      <Rows/>
    </table>
)

export default DataTableTable