import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Functions = () =>
  <Example
    title="Setter Functions"
    Component={Component}
    Source={Source}
  >
    <p>
      The setter functions can be passed a function which will receive the
      current value and should return the modified value.
    </p>
    <p>
      In this example
      we modify the <code>Row</code> component to add buttons to increment
      and decrement the current value.
    </p>
  </Example>

export default Functions
