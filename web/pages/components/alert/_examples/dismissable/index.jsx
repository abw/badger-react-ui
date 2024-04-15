import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Dismissable = () =>
  <Example
    code="dismissable"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>dismissable</code> property can be used to make an alert
      dismissable.
    </p>
  </Example>

export default Dismissable