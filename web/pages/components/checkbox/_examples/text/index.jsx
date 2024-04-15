import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Text = () =>
  <Example
    code="text"
    Component={Component}
    Source={Source}
    highlightLines="2"
    undent={4}
    expand
  >
    <p>
      The <code>text</code> property should be used to set the text
      for the checkbox.
    </p>
  </Example>

export default Text