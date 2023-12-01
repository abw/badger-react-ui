import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Options = () =>
  <Example
    code="options"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>options</code> property should be used to provide an array
      of options that the user can select from.  Each element in the array
      can be a string or an object.
    </p>
  </Example>

export default Options
