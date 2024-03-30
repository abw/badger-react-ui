import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnRowClick = () =>
  <Example
    code="onRowClick"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>onRowClick</code> property can be used to define a handler
      which will be called when the user clicks on a row.  When set the table
      will have the <code>selectable</code> CSS class added to highlight the
      hovered row.
    </p>
  </Example>

export default OnRowClick