import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnClick = () =>
  <Example
    code="onClick"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>onClick</code> property can be used to register a function
      which will be called when the button is clicked.
    </p>
  </Example>

export default OnClick