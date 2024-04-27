import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const UseDataTable = () =>
  <Example
    code="useDataTable"
    Component={Component}
    Source={Source}
    highlightLines="23,35,40-44"
    undent={2}
    expand
  >
    <p>
      The <code>useDataTable</code> hook can be called to return the DataTable
      context.  This contains all the DataTable state data, including any
      additional properties passed to the DataTable.
    </p>
    <p>
      In this example we define a <code>display</code> function for the{' '}
      <code>text</code> column. The function is passed an object containing
      the <code>row</code> and the <code>rowIndex</code> which is the offset
      (starting at 0) in the current page of rows.  The <code>useDataTable()</code> hook returns
      the current <code>page</code> which has the <code>from</code> property
      indicating the current row number (starting at 1 - use <code>firstIndex</code> if
      you want to row offset starting at 0). Adding them together gives the
      overall row number.
    </p>
    <p>
      The <code>rowClass</code> function also calls <code>useDataTable()</code>,
      in this case to access the <code>statusClasses</code> lookup table that
      was passed to the DataTable as an additional property.
    </p>
  </Example>

export default UseDataTable