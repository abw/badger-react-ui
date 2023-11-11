import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Text = () =>
  <Example
    code="text"
    Component={Component}
    Source={Source}
    undent={6}
    expand
  >
    <p>
      The <code>text</code> property can be used to define the body
      text.
    </p>
  </Example>

export default Text