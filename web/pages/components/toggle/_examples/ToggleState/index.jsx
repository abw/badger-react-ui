import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ToggleState = () =>
  <Example
    code="ToggleState"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>ToggleState</code> component is a wrapper around the{' '}
      <code>Toggle</code> component which maintains the state of the selected
      option internally.  Use the <code>onSelect</code> handler to get
      notification when a new option is selected.
    </p>
    <p>
      You can also define a <code>storageKey</code> to store the selected
      option in local storage.  Try selecting an option below and then
      reload the page.  You should see the option selection restored.
    </p>
  </Example>

export default ToggleState
