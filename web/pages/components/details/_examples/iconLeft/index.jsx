import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const IconLeft = () =>
  <Example
    code="iconLeft"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>iconLeft</code> property can be used to define the icon
      displayed on the left.
    </p>
  </Example>

export default IconLeft