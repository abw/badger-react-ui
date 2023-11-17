import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const CheckboxState = () =>
  <Example
    code="CheckboxState"
    Component={Component}
    Source={Source}
    expand
  >
    <div className="cols-2">
      <p>
        The <code>CheckboxState</code> function can be used to generate a
        Checkbox with internal state.
      </p>
    </div>
  </Example>

export default CheckboxState