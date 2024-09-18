import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="onChangeValue"
    Component={Component}
    Source={Source}
    highlightLines="9-12,21"
    expand
  >
    <p>
      The <code>onChangeValue</code> property can be set as an alternative to
      the <code>onChange</code> handler function.  It is particularly useful
      when using stepped values or options.  It will only fire when the
      minimum or maximum value has change sufficiently to set a new stepped
      value.  This can greatly reduce the number of events fired compared to
      the <code>onChange</code> handler.
    </p>
  </Example>

export default RangeExample