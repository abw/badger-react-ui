import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const IconLeft = () =>
  <Example
    code="iconLeft"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>iconLeft</code> property can used to define an icon for the
      left side of the trigger.  The <code>iconLeftClass</code> can be used
      to add a CSS class for it.
    </p>
  </Example>

export default IconLeft