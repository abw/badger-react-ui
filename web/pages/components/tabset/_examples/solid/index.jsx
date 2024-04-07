import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Solid = () =>
  <Example
    code="solid"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>solid</code> property can be used to render the tabs using
      solid colors.  It can be used in conjunction with <code>lined</code>.
    </p>
  </Example>

export default Solid
