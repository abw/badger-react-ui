import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Label = () =>
  <Example
    code="label"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>label</code> property can be used to define the label that
      appears in the column heading.
    </p>
  </Example>

export default Label