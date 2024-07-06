import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const InputClass = () =>
  <Example
    code="inputClass"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={4}
    expand
  >
    <p>
      The <code>inputClass</code> property can be used to add a CSS class
      to the checkbox <code>input</code> element.
    </p>
  </Example>

export default InputClass