import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="style"
    Component={Component}
    Source={Source}
    undent={2}
    // highlightLines="2"
    expand
  >
    <p>
      The <code>style</code> property can be used to set additional styles
      and CSS custom properties.
    </p>
  </Example>

export default RangeExample