import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Button = () =>
  <Example
    code="button"
    Component={Component}
    Source={Source}
    highlightLines="6-8"
    undent={2}
    expand
  >
    <p>
      The <code>button</code> property can used to render the dropdown trigger
      as a button.  The <code>triggerColor</code> and <code>triggerSize</code> properties
      can be used to set the button color and size.
    </p>
  </Example>

export default Button