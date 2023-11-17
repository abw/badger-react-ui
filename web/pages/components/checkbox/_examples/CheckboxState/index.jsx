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
        Checkbox with state.  The <code>checked</code> property can be
        passed to it to set the initial state of the checked, otherwise it
        default to <code>false</code> indicating the checkbox is unchecked.
      </p>
      <p>
        It returns a <code>Checkbox</code> component, along with
        the <code>isChecked</code> property denoting the current state of the
        checkbox and the <code>setChecked</code> function to change it.
        The <code>check</code> and <code>uncheck</code> functions are also
        provided as short-cuts to set the checkbox on or off, respectively.
      </p>
    </div>
  </Example>

export default CheckboxState