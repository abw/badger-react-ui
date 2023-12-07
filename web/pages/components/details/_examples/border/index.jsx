import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Border = () =>
  <Example
    code="border"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>border</code> property can be used to add a CSS class
      to add a border around the component.  You might also like to add
      the <code>lined</code> property to get a line between the summary
      and body content.
    </p>
  </Example>

export default Border