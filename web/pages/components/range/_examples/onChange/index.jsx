import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="onChange"
    Component={Component}
    Source={Source}
    highlightLines="9-12,21"
    expand
  >
    <p>
      The <code>onChange</code> property can be set as a handler function
      which will be called when either the <code>minValue</code> or{' '}
      <code>maxValue</code> changes.  The function will be called with the{' '}
      <code>minValue</code> and <code>maxValue</code> passed as arguments.
      The third argument is the context state object containing all current
      values in case you need to inspect something else.
    </p>
  </Example>

export default RangeExample