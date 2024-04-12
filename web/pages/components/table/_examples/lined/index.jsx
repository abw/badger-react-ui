import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Lined = () =>
  <Example
    code="lined"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>lined</code> property is a shortcut to add the{' '}
      <code>lined</code> CSS class which adds border lines between each row.
    </p>
  </Example>

export default Lined
