import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Cancel = () =>
  <Example
    code="cancel"
    Component={Component}
    Source={Source}
    highlightLines="4-9"
    undent={2}
    expand
  >
    <p>
      The <code>cancel</code> property can be used to set properties for
      the cancel button.
    </p>
  </Example>

export default Cancel