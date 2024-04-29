import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Offset = () =>
  <Example
    code="offset"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>offset</code> property can added to set the offset (in pixels)
      of the dropdown body from the trigger.  The default value is 6.
    </p>
  </Example>

export default Offset