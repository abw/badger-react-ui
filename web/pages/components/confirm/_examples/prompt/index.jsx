import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Prompt = () =>
  <Example
    code="prompt"
    Component={Component}
    Source={Source}
    highlightLines="5,12-19"
    undent={4}
    expand
  >
    <p>
      The <code>prompt</code> property can be used to provide an additional
      prompt to the user in a modal confirmation.
      If a <code>prompt</code> is defined then the buttons will be rendered
      in the modal footer.  Otherwise they will be in the main modal body.
    </p>
  </Example>

export default Prompt