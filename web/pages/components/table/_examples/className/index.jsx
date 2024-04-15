import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ClassName = () =>
  <Example
    code="className"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={2}
  >
    <p>
      The <code>className</code> property allows you to set the CSS class
      for the <code>table</code> element.
    </p>
  </Example>

export default ClassName
