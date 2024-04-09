import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const InactiveProps = () =>
  <Example
    code="inactiveProps"
    Component={Component}
    Source={Source}
    expand
    undent={4}
  >
    <p>
      The <code>inactiveProps</code> property can be used to define
      properties for inactive buttons.
    </p>
  </Example>

export default InactiveProps
