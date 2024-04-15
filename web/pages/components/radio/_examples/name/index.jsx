import React      from 'react'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Example    from '@/page/ExampleSection.jsx'

const Name = () =>
  <Example
    code="name"
    Component={Component}
    Source={Source}
    undent={4}
    highlightLines="2"
    expand
  >
    <p>
      Each radio set should have a unique name so that the web browser knows
      which options belong to a particular group.  You can provider one
      explicitly using the <code>name</code> property, otherwise one will be
      generated for you.
    </p>
  </Example>

export default Name