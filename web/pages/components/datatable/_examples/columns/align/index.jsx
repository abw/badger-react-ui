import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Align = () =>
  <Example
    code="align"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>align</code> property can be used to specify the alignment
      of cells.  The default value is <code>left</code> or you can set it
      to <code>center</code> or <code>right</code>.
    </p>
  </Example>

export default Align