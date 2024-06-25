import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ShowValue = () =>
  <Example
    code="showValue"
    Component={Component}
    Source={Source}
    highlightLines="2"
    undent={2}
    expand
  >
    <p>
      The <code>showValue</code> property can be specified to display the
      current value above the slider thumb.
    </p>
  </Example>

export default ShowValue