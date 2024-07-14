import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const SetterNamer = () =>
  <Example
    code="setterNamer"
    Component={Component}
    Source={Source}
    highlightLines="3,6,8"
  >
    <p>
      You can define your own function for generating the names for setters
      using the <code>setterNamer</code> option.  It should be a function
      accepting the name of a value and returning the name for the setter.
    </p>
  </Example>

export default SetterNamer
