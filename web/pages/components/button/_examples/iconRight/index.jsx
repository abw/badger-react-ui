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
  >
    <p>
      The <code>iconRight</code> property can be used to add an icon to
      the right side of a button.
    </p>
  </Example>

export default IconRight