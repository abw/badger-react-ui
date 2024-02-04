import React      from 'react'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Example    from '@/page/ExampleSection.jsx'
import HashLink   from '@/page/HashLink.jsx'

const OnChange = () =>
  <Example
    code="onChange"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>onChange</code> property should be used to define a function
      to handle changes in the state.  This will typically be used to
      update the <HashLink text="value"/>.
    </p>
  </Example>

export default OnChange