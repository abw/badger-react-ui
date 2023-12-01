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
      The <code>size</code> property is a short-cut to set the size.  This
      adds the size to the CSS class.
    </p>
  </Example>

export default Size