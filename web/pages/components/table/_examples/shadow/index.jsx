import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Shadow = () =>
  <Example
    code="shadow"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>shadow</code> property is a shortcut to add one of the
      shadow styles to the table.  The value should be an integer from
      1 to 5.
    </p>
  </Example>

export default Shadow
