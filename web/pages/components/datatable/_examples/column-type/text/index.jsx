import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Type = () =>
  <Example
    code="text"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="8"
    expand
  >
    <p>
      The default column <code>type</code> is <code>text</code>.  You don&apos;t
      need to specify it but you can if you like being explicit.
    </p>
  </Example>

export default Type