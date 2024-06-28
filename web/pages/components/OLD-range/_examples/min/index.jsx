import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="min"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="2"
    expand
  >
    <p>
      The <code>min</code> property can be used to set the minimum value for
      the range.  The default value is <code>0</code>.
    </p>
  </Example>

export default RangeExample