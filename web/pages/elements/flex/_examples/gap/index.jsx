import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FlexExample = () =>
  <Example
    code="gap"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={4}
  >
    <p>
      The <code>gap</code> property allows you to define the gap between
      elements in units of 0.25rem.
    </p>
  </Example>

export default FlexExample
