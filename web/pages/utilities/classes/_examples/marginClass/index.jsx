import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const MarginClass = () =>
  <Example
    code="marginClass"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>marginClass</code> utility function can be used to construct
      a CSS class for adding padding.  It works in the same way as <code>paddingClass</code>.
    </p>
  </Example>

export default MarginClass
