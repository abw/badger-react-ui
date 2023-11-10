import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Type = () =>
  <Example
    code="type"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>type</code> property can be used to set it to one of the
      pre-defined types: <code>info</code>, <code>success</code>,{' '}
      <code>warning</code> or <code>error</code>.
    </p>
  </Example>

export default Type