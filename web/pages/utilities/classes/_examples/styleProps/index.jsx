import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const StyleProps = () =>
  <Example
    code="styleProps"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>styleProps</code> utility function can be used to extract
      any of the above style properties and generate the corresponding CSS
      class as the <code>className</code> property.  Any other properties
      will be passed through.
    </p>
    <p>
      The <code>padding</code> and <code>margin</code> properties may be
      abbreviated to <code>pad</code> and <code>mar</code> respectively.
    </p>
  </Example>

export default StyleProps
