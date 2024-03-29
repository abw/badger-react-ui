import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const IconLeft = () =>
  <Example
    code="iconLeft"
    Component={Component}
    Source={Source}
    undent={2}
  >
    <p>
      The <code>iconLeft</code> property can be used to add an icon to
      the left side of a badge.
    </p>
  </Example>

export default IconLeft