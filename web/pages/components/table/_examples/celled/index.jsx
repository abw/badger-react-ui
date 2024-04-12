import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Celled = () =>
  <Example
    code="celled"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>celled</code> property is a shortcut to add the{' '}
      <code>celled</code> CSS class which adds border lines to each cell.
    </p>
  </Example>

export default Celled
