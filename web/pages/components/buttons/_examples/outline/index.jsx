import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Outline = () =>
  <Example
    code="outline"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      Additional properties passed to the <code>Buttons</code> component
      will be forwarded to each <code>Button</code> component.  For example,
      you can set the <code>outline</code> property on the parent
      <code>Buttons</code> component so that you don&apos;t have to repeat
      it for each button.  However, individual buttons can override any
      of these properties.
    </p>
  </Example>

export default Outline