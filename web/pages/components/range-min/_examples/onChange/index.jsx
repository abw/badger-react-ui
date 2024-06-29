import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RangeExample = () =>
  <Example
    code="onChange"
    Component={Component}
    Source={Source}
    highlightLines="5-8,15"
    expand
  >
    <p>
      The <code>onChange</code> property can be set as a handler function
      which will be called when the <code>value</code> (AKA <code>minValue</code>)
      changes.  The function will be called with the new <code>value</code> passed as
      an argument.  The second argument will be the context state object.
    </p>
  </Example>

export default RangeExample