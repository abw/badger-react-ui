import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="maxRange"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="4"
    expand
  >
    <p>
      The <code>maxRange</code> property can be used to define a maximum
      permissable range between the <code>minValue</code> and <code>maxValue</code>.
    </p>
    <p>
      No matter how hard you try to cleave apart the ends of the the range,
      they won&apos;t budge if the difference between them would be more than
      the limit imposed by <code>maxRange</code>.
    </p>
  </Example>

export default RangeExample