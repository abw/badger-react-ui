import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Clear = () =>
  <Example
    code="clear"
    Component={Component}
    Source={Source}
  >
    <p>
      You can use the <code>onLoad</code> property to save a reference
      to the search context.  You can call the <code>clear</code> method
      on that to programmatically clear the input.  This has the same effect as
      clicking on the cross icon to the right of the input.
    </p>
  </Example>

export default Clear
