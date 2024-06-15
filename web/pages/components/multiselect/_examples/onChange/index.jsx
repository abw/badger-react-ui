import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const OnChange = () =>
  <Example
    code="onChange"
    Component={Component}
    Source={Source}
    highlightLines="5-13,18"
    expand
  >
    <p>
      The <code>onChange</code> property can be used to define a handler which
      will be called whenever an item is selected or unselected.  The updated
      list of selected options will be passed as an argument.
    </p>
  </Example>

export default OnChange
