import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Indent = () =>
  <Example
    code="indent"
    Component={Component}
    Source={Source}
    highlightLines="5-13"
    expand
  >
    <p>
      An element in the <code>options</code> array can have an <code>indent</code>{' '}
      number to indent it.  The number can be from 1 to 4.
    </p>
  </Example>

export default Indent
