import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ShadowClass = () =>
  <Example
    code="shadowClass"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>shadowClass</code> utility function can be used to construct
      a CSS class for adding a box shadow.  If the value is a number then
      it will return the corresponding <code>shadow-N</code> class to set the
      box shadow.
    </p>
  </Example>

export default ShadowClass
