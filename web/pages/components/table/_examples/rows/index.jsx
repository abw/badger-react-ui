import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Rows = () =>
  <Example
    code="rows"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>rows</code> (or <code>bodyRows</code>) property is used to
      define an array of rows for the main table body.
    </p>
    <p>
      Each element in the <code>rows</code> array can be an array of cells.
      Or it can be an object containing an array of cells as the{' '}
      <code>cells</code> property and any other properties for
      the row (e.g. <code>className</code> to set the CSS class for the row).
    </p>
    <p>
      Each cell can be a simple text string or other value, or an object
      containing the value as the <code>text</code> property, along with any
      other properties for the cell (e.g. <code>className</code>).
    </p>
    <p>
      Cells in the header are rendered as <code>th</code> elements.  Cells
      in the body and footer are rendered as <code>td</code> element.  The{' '}
      boolean <code>th</code> property can be added to a cell to change this
      behaviour.
    </p>
  </Example>

export default Rows
