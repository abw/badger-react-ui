import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Classes = () =>
  <Example
    code="classes"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>classes</code> utility function can be used to construct
      a single CSS class string from various input values.
    </p>
    <p>
      Any null or undefined values will be ignored.
      If any argument is an object then the keys in the object will be
      included if the corresponding value is truthy.
    </p>
  </Example>

export default Classes
