import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RowClass = () =>
  <Example
    code="rowClass"
    Component={Component}
    Source={Source}
    highlightLines="1-5,16-18"
    undent={2}
    expand
  >
    <p>
      The <code>rowClass</code> property can be used to add a CSS class for
      a row based on some property.  It can be a static string or a function
      that will be passed an object containing the <code>row</code> and{' '}
      <code>rowIndex</code> as properties and should return a string.
    </p>
  </Example>

export default RowClass