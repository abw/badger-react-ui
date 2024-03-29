import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Shadow = () =>
  <Example
    code="shadow"
    Component={Component}
    Source={Source}
    undent={2}
  >
    <p>
      The <code>shadow</code> property can be used to add a shadow to the
      badge ranging from 1 to 5.
    </p>
  </Example>

export default Shadow