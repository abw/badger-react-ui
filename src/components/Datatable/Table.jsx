import React              from 'react'
import Context            from './Context.js'
import DatatableRows      from './Rows.jsx'
import DatatableHeadings  from './Headings.jsx'
import DatatableFilters   from './Filters.jsx'
import { classes }        from '@/src/utils/classes.js'

const Table = ({
  tableClass='celled striped',
  selectableClass='selectable',
  scrollX,
  onRowClick,
  showFilters,
  Headings=DatatableHeadings,
  Filters=DatatableFilters,
  Rows=DatatableRows
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

export const DatatableTable = Context.Consumer(Table)
export default DatatableTable