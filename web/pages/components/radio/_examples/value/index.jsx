import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Value = () =>
  <Example
    code="value"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>value</code> property should be used to define the current
      selected value.  This should be used in conjunction with{' '}
      <a href="#onchange" className="font-mono">onChange</a> to update the
      value.
    </p>
  </Example>

export default Value