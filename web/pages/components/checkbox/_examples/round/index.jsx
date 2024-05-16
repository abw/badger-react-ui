import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Switch = () =>
  <Example
    code="round"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={4}
    expand
  >
    <p>
      The <code>round</code> property can be used in conjunction with{' '}
      the <code>switch</code> property to render the checkbox as a
      round switch.
    </p>
  </Example>

export default Switch