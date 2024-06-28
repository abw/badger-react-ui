import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="size"
    Component={Component}
    Source={Source}
    undent={4}
    // highlightLines="2"
    expand
  >
    <p>
      The <code>size</code> property can be used to set the size to any of
      the standard sizes.  The default value is equivalent to <code>medium</code>.
    </p>
  </Example>

export default RangeExample