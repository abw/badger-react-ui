import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ActiveProps = () =>
  <Example
    code="activeProps"
    Component={Component}
    Source={Source}
    highlightLines="2-4"
    expand
    undent={4}
  >
    <p>
      The <code>activeProps</code> property can be used to define
      properties for the active button.
    </p>
  </Example>

export default ActiveProps
