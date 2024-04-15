import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Info = () =>
  <Example
    code="Info"
    Component={Component}
    Source={Source}
    highlightLines="3,6,10,15"
    undent={2}
    expand
  >
    <p>
      The <code>Info</code> component is a short-cut to generate an info alert.
    </p>
  </Example>

export default Info