import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Name = () =>
  <Example
    code="name"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>name</code> property can be used to select an icon from the
      default icon library.
    </p>
  </Example>

export default Name