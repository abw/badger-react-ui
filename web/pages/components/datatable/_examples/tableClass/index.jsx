import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const TableClass = () =>
  <Example
    code="tableClass"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>tableClass</code> property can be used to set the CSS class
      for the table.  The default value is <code>celled shaded</code>.
    </p>
  </Example>

export default TableClass