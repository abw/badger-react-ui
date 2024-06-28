import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="className"
    Component={Component}
    Source={Source}
    undent={2}
    // highlightLines="2"
    expand
  >
    <p>
      The <code>className</code> property can be used to add additional CSS
      classes to the container.
    </p>
  </Example>

export default RangeExample