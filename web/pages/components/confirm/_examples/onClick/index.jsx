import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnClick = () =>
  <Example
    code="onClick"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={2}
    expand
  >
    <p>
      The <code>onClick</code> property should be used to define the handler
      which will be called when the user confirms the action.
    </p>
  </Example>

export default OnClick