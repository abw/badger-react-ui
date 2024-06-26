import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Display = () =>
  <Example
    code="display"
    Component={Component}
    Source={Source}
    highlightLines="6-7"
    undent={2}
    expand
  >
    <p>
      The <code>display</code> property can be used to define a custom
      function to display the column value.  It will be passed an object
      containing the <code>row</code>, <code>column</code>,{' '}
      <code>name</code>, <code>value</code>, <code>rowIndex</code> and{' '}
      <code>cellIndex</code>.
    </p>
  </Example>

export default Display