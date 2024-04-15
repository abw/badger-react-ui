import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Size = () =>
  <Example
    code="size"
    Component={Component}
    Source={Source}
    highlightLines="2"
    expand
    undent={4}
  >
    <p>
      The <code>size</code> property can be used to set the size of the
      buttons.
    </p>
  </Example>

export default Size
