import React              from 'react'
import Context            from './Context.js'
import DatatableRows      from './Rows.jsx'
import DatatableHeadings  from './Headings.jsx'
import { classes }        from '@/src/utils/classes.js'

const Table = ({
  tableClass='celled striped table',
  selectableClass='selectable',
  scrollX,
  rowClick,
  Headings=DatatableHeadings,
  Rows=DatatableRows
}) =>
  <table
    className={classes(
      tableClass,
      scrollX ? 'nowrap' : 'wide',
      {
        [selectableClass]: rowClick,
      }
    )}
  >
    <Headings/>
    <Rows/>
  </table>

export default Context.Consumer(Table)