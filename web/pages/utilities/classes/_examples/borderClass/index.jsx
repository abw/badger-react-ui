import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const BorderClass = () =>
  <Example
    code="borderClass"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>borderClass</code> utility function can be used to construct
      a CSS class for adding a border.  If the argument is a true value then
      it will return the <code>border</code> CSS class.  If the value is a
      number then it will add the corresponding <code>bdw-N</code> class to
      set the border width.
    </p>
  </Example>

export default BorderClass
