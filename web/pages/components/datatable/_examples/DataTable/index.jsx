import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { Warning } from '@/src/components/index.jsx'

const DataTable = () =>
  <>
    <p className="large">
      The <code>DataTable</code> component can be used to display, sort, filter
      and page sets of data.
    </p>
    <Warning title="Important Note" border icon="exclamation">
      <p>
      There were some breaking changes in version 1.1.0.
      </p>
      <p>
        This component was previously called <code>Datatable</code> and has
        been renamed to{' '} <code>DataTable</code> (note the capital T).
        The old name is still supported as an alias but will be removed at
        some point in the future
      </p>
      <p>
        The{' '} <code>onRowClick</code> function has also change.  It was
        previously passed the <code>row</code> as an argument.  It is now
        passed an object containing the <code>row</code> property, along with
        any other items defined using the <code>extra</code> property.
      </p>
    </Warning>
    <p>
      The two mandatory properties are <code>rows</code> and <code>columns</code>.
      The <code>rows</code> should be an array of objects containing the
      data that you want to display.  The <code>columns</code> defines
      which properties in those objects you want to display.  In the simple
      case this can be a string of whitespace delimited identifiers.
      These should correspond to properties in the objects in the{' '}
      <code>rows</code> array.
    </p>
    <p>
      Click on the column headings to set the sort order.  Clicking again
      on the same column heading will toggle the order between ascending
      and descending.  Click on the small filter icon in each heading to
      show/hide the filters.  You can then type into the filter value for
      each column to filter the rows.
    </p>
    <p>
      The &quot;Page Size&quot; dropdown menu in the top right corner
      allows you to specify how many rows appear on each page.  The
      &quot;Columns&quot; item next to it allows you to specify which
      columns should be displayed.  You can drag them to change the order of
      columns.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default DataTable