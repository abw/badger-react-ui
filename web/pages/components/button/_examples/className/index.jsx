import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ClassName = () =>
  <Example
    code="className"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>className</code> property can be added to add a CSS class
      to the button.
    </p>
  </Example>

export default ClassName