import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Warning = () =>
  <Example
    code="Warning"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>Warning</code> component is a short-cut to generate a
      warning alert.
    </p>
  </Example>

export default Warning