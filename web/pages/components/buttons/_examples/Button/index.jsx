import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Button = () =>
  <Example
    code="Button"
    Component={Component}
    Source={Source}
    highlightLines="4-7,15"
    expand
  >
    <p>
      The <code>Button</code> property (note the capital B) can be used to
      define a different component for rendering each button.
    </p>
  </Example>

export default Button