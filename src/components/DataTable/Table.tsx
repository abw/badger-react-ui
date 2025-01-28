import React              from 'react'
import Context            from './Context'
import DataTableRows      from './Rows'
import DataTableHeadings  from './Headings'
import DataTableFilters   from './Filters'
import { SELECTABLE }     from './constants'
import { classes }        from '@/src/utils/classes'

const Table = ({
  tableClass='celled striped',
  selectableClass=SELECTABLE,
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

export const DataTableTable = Context.Consumer(Table)
export default DataTableTable