import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ConfirmProps = () =>
  <Example
    id="confirmProps"
    code="confirmXXX"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      You can also set individual properties for the confirm button
      <code>confirmIcon</code>,{' '}
      <code>confirmText</code>,{' '}
      <code>confirmColor</code> and{' '}
      <code>confirmClass</code>.
    </p>
  </Example>

export default ConfirmProps