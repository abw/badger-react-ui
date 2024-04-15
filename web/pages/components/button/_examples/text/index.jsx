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
    undent={2}
    expand
  >
    <p>
      The <code>text</code> property can be used to set the text
      for the button.
    </p>
  </Example>

export default Text