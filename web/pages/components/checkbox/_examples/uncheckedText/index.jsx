import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const UncheckedText = () =>
  <Example
    code="uncheckedText"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={4}
    expand
  >
    <p>
      The <code>uncheckedText</code> property can be used to provide different
      text for the unchecked state.
    </p>
  </Example>

export default UncheckedText