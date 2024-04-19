import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Shadow = () =>
  <Example
    code="shadow"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>shadow</code> property can be used to add a shadow.
      It can be a simple flag (equivalent to <code>shadow={1}</code>) or an
      integer from 1 to 5 giving progressively larger shadows.
    </p>
  </Example>

export default Shadow