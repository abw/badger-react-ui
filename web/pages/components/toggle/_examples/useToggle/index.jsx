import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const UseToggle = () =>
  <Example
    code="useToggle"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>useToggle</code> hook can be called to return an array
      containing the currently selected <code>option</code> and a{' '}
      <code>Toggle</code> component.  You can render the component
      multiple times and each instance will share the same state.
      Additional properties can be passed each time you render it.
    </p>
    <p>
      The third item returned in the array is a function to programmatically
      select an option.  You can specify either the numerical index of the
      item or the <code>value</code> for the option.
    </p>
    <p>
      The fourth item returned is a function to step through each option
      in turn.
    </p>
  </Example>

export default UseToggle
