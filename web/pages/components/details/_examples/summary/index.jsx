import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Summary = () =>
  <Example
    code="summary"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>summary</code> property is used to set the summary text.
      It can be a text string or any JSX content.
    </p>
  </Example>

export default Summary