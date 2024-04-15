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
      The <code>iconRight</code> property can be used to add an icon to the
      right.  Or <code>iconLeft</code> can be used to add an icon to the left.
      Or just an <code>icon</code> if you want an icon without any text.
    </p>
  </Example>

export default IconRight