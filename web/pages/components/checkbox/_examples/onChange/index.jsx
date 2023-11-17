import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnChange = () =>
  <Example
    code="onChange"
    Component={Component}
    Source={Source}
    // undent={4}
    expand
  >
    <p>
      The <code>onChange</code> property should be used to define a function
      to handle changes in the state.
    </p>
  </Example>

export default OnChange