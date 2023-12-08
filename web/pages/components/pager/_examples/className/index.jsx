import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ClassName = () =>
  <Example
    code="className"
    Component={Component}
    Source={Source}
    undent={4}
  >
    <p>
      The <code>className</code> property can be used to set a CSS class
      for the pager container.  The default value is <code>pager</code>.
    </p>
  </Example>

export default ClassName