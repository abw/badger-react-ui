import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Size = () =>
  <Example
    code="size"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>size</code> property can be used to set the text size.
    </p>
  </Example>

export default Size