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
      The <code>border</code> property can be set to add a border to each
      item.
    </p>
    <p>
      You may need to add margins to either the bottom or right side of
      each label using the <code>labelClass</code> property.
    </p>
  </Example>

export default Border