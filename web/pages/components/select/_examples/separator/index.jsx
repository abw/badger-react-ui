import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Separator = () =>
  <Example
    code="separator"
    Component={Component}
    Source={Source}
    highlightLines="8"
    expand
  >
    <p>
      An element in the <code>options</code> array can be an object with a{' '}
      <code>separator</code> property to render a separator.
    </p>
  </Example>

export default Separator
