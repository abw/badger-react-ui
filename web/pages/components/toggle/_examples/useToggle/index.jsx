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
  </Example>

export default UseToggle
