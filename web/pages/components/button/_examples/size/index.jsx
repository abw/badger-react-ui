import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Size = () =>
  <Example
    code="size"
    Component={Component}
    Source={Source}
    highlightLines={ line => line % 4 === 0 }
    undent={2}
  >
    <p>
      The <code>size</code> property can be used to set the button size.
      This can be one of: <code>smallest</code>, <code>smaller</code>, <code>small</code>{' '},
      <code>medium</code> (default - same as no explicit size), <code>large</code>{' '},
      <code>larger</code>, <code>largest</code>; or any of the size multipliers:{' '}
      <code>x2</code>, <code>x3</code>, etc., up to <code>x10</code>.
    </p>
  </Example>

export default Size