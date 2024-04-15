import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FootRow = () =>
  <Example
    code="FootRow"
    Component={Component}
    Source={Source}
    highlightLines="20-24,30-31"
    expand
  >
    <p>
      The <code>FootRow</code> property allows you to define your own component
      for rendering rows in the footer.  This will override any value defined
      for <code>Row</code>.
    </p>
  </Example>

export default FootRow
