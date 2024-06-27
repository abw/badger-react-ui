import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="showValues"
    Component={Component}
    Source={Source}
    highlightLines="2"
    undent={2}
    expand
  >
    <p>
      The <code>showValues</code> property (or <code>showValue</code> as an alias)
      can be specified to display the current values above their respective slider thumbs.
    </p>
  </Example>

export default RangeExample