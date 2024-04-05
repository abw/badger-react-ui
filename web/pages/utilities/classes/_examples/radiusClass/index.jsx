import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const RadiusClass = () =>
  <Example
    code="radiusClass"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>radiusClass</code> utility function can be used to construct
      a CSS class for adding a border radius.  If the value is a number then
      it will return the corresponding <code>bdr-N</code> class to set the
      border radius.
    </p>
  </Example>

export default RadiusClass
