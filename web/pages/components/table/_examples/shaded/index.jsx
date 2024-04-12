import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Shaded = () =>
  <Example
    code="shaded"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>shaded</code> property is a shortcut to add the{' '}
      <code>shaded</code> CSS class which adds background colors to each cell.
    </p>
  </Example>

export default Shaded
