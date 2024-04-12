import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FootRows = () =>
  <Example
    code="footRows"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>footRows</code> property is used to define an array of rows
      for the table footer.  The data format is the same as for{' '}
      <code>rows</code> / <code>bodyRows</code>.
    </p>
  </Example>

export default FootRows
