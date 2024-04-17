import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Display = () =>
  <Example
    code="display"
    Component={Component}
    Source={Source}
    highlightLines="6-8"
    undent={2}
    expand
  >
    <p>
      The <code>display</code> property can be used to define a custom
      function to display the column value.
    </p>
  </Example>

export default Display