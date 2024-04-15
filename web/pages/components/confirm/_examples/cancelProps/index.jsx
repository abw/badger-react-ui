import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Cancel = () =>
  <Example
    id="cancelProps"
    code="cancelXXX"
    Component={Component}
    Source={Source}
    highlightLines="4-6"
    undent={2}
    expand
  >
    <p>
      You can also set individual properties for the cancel button
      <code>cancelIcon</code>,{' '}
      <code>cancelText</code>,{' '}
      <code>cancelColor</code> and{' '}
      <code>cancelClass</code>.
    </p>
  </Example>

export default Cancel