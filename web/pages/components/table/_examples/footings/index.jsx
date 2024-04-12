import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Footings = () =>
  <Example
    code="footings"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>footings</code> property is a shortcut for the common case
      where you just want to have a single row in the footer.  It is equivalent
      to defining <code>footRows</code> with the <code>footings</code> as the
      only element.
    </p>
  </Example>

export default Footings
