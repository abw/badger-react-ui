import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Success = () =>
  <Example
    code="Success"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>Success</code> component is a short-cut to generate a success alert.
    </p>
  </Example>

export default Success