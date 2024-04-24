import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Heading = () =>
  <Example
    code="heading"
    Component={Component}
    Source={Source}
    highlightLines="5,9"
    expand
  >
    <p>
      An element in the <code>options</code> array can be an object with a{' '}
      <code>heading</code> property to denote a heading item.
    </p>
  </Example>

export default Heading
