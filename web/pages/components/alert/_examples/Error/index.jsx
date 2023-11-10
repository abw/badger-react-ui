import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Error = () =>
  <Example
    code="Error"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>Error</code> component is a short-cut to generate an error alert.
    </p>
  </Example>

export default Error