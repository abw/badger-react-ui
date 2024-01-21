import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Datatable = () =>
  <>
    <p className="large">
      The <code>Datatable</code> component can be used to display, sort, filter
      and page sets of data.
    </p>
    <div className="cols-2 stack-desktop">
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
    </div>
    <Example
      Component={Component}
      code={Source}
    />
  </>

export default Datatable