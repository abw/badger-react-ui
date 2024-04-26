import React              from 'react'
import Context            from './Context.js'
import DataTableRows      from './Rows.jsx'
import DataTableHeadings  from './Headings.jsx'
import DataTableFilters   from './Filters.jsx'
import { classes }        from '@/src/utils/classes.js'

const Table = ({
  tableClass='celled striped',
  selectableClass='selectable',
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
      scrollX ? 'nowrap' : 'wide',
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

export const DataTableTable = Context.Consumer(Table)
export default DataTableTable