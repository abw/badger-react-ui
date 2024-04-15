import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Headings = () =>
  <Example
    code="headings"
    Component={Component}
    Source={Source}
    highlightLines="4,16"
    expand
  >
    <p>
      The <code>headings</code> property is a shortcut for the common case
      where you just want to have a single row in the header.  It is equivalent
      to defining <code>headRows</code> with the <code>headings</code> as the
      only element.
    </p>
  </Example>

export default Headings
