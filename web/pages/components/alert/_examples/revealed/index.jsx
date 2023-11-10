import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Revealed = () =>
  <Example
    code="revealed"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>revealed</code> property can be set to make it a revealable
      alert initially revealed.
    </p>
  </Example>

export default Revealed