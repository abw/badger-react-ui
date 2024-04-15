import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Bare = () =>
  <Example
    code="bare"
    Component={Component}
    Source={Source}
    highlightLines="5,10,15"
    undent={2}
    expand
  >
    <p>
      The <code>bare</code> property can be added for bare naked buttons.
    </p>
  </Example>

export default Bare