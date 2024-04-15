import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const IconRight = () =>
  <Example
    code="iconRight"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>iconRight</code> property can used to define an icon for the
      left side of the trigger.  The <code>iconRightClass</code> can be used
      to add a CSS class for it.
    </p>
  </Example>

export default IconRight