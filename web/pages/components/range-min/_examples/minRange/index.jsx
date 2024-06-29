import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="minRange"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="3"
    expand
  >
    <p>
      The <code>minRange</code> property can be used to define a minimum
      permissable width of the range.
    </p>
  </Example>

export default RangeExample