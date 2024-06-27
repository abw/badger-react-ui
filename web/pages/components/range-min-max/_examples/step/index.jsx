import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="step"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="2"
    expand
  >
    <p>
      The <code>step</code> property can be used to set a step for the values.
      The default value is <code>1</code>.  You can set this to <code>any</code>{' '}
      to allow any value to be entered.
    </p>
  </Example>

export default RangeExample