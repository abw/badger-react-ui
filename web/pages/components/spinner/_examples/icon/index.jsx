import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Icon = () =>
  <Example
    code="icon"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>icon</code> property can be used to change the foreground
      icon. The default value is <code>cog</code>.
    </p>
  </Example>

export default Icon
