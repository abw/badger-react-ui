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
    highlightLines="4"
    expand
  >
    <p>
      The <code>minRange</code> property can be used to define a minimum
      permissable range between the <code>minValue</code> and <code>maxValue</code>.
    </p>
    <p>
      No matter how hard you try to squish the ends of the the range together,
      they won&apos;t budge if the difference between them would be less than
      the limit imposed by <code>minRange</code>.
    </p>
  </Example>

export default RangeExample