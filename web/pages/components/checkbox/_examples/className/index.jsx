import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ClassName = () =>
  <Example
    code="className"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={4}
    expand
  >
    <p>
      The <code>className</code> property can be used to add a CSS class
      to the checkbox <code>label</code> element.
    </p>
  </Example>

export default ClassName