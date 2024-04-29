import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const IconRotate = () =>
  <Example
    code="iconRotate"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>iconRotate</code> property can used to specify the
      rotation (in degrees) of the icon when the dropdown is open.
    </p>
  </Example>

export default IconRotate