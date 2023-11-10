import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Revealable = () =>
  <Example
    code="revealable"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>revealable</code> property can be used to make the alert
      revealable.
    </p>
  </Example>

export default Revealable