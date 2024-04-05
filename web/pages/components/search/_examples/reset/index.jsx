import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Reset = () =>
  <Example
    code="reset"
    Component={Component}
    Source={Source}
  >
    <p>
      You can use the <code>onLoad</code> property to save a reference
      to the search context.  You can call the <code>reset</code> method
      on that to reset the search.
    </p>
  </Example>

export default Reset
