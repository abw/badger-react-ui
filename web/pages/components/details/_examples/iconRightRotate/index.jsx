import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const IconRightRotate = () =>
  <Example
    code="iconRightRotate"
    Component={Component}
    Source={Source}
    highlightLines="5"
    undent={2}
    expand
  >
    <p>
      The <code>iconRightRotate</code> property can be used to set the number
      of degrees the icon should rotate when the details element is opened.
    </p>
  </Example>

export default IconRightRotate