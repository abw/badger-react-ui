import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const HeadRow = () =>
  <Example
    code="HeadRow"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>HeadRow</code> property allows you to define your own component
      for rendering rows in the header.  This will override any value defined
      for <code>Row</code>.
    </p>
  </Example>

export default HeadRow
