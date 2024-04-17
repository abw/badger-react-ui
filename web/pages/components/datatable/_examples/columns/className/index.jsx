import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ClassName = () =>
  <Example
    code="className"
    Component={Component}
    Source={Source}
    highlightLines="10,13,17,21"
    undent={4}
    expand
  >
    <p>
      The <code>className</code> property can be used to add a CSS class
      to the column.
    </p>
  </Example>

export default ClassName