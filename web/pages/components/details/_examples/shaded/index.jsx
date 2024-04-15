import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Shaded = () =>
  <Example
    code="shaded"
    Component={Component}
    Source={Source}
    highlightLines="3,11,19"
    undent={4}
    expand
  >
    <p>
      The <code>shaded</code> property can be used to add shading.
    </p>
  </Example>

export default Shaded