import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const IconRightRotate = () =>
  <Example
    code="iconRightRotate"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>iconRightRotate</code> property can used to specify the
      rotation (in degrees) of the icon when the dropdown is open.
    </p>
  </Example>

export default IconRightRotate