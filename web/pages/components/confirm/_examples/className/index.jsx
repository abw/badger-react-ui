import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ClassName = () =>
  <Example
    code="className"
    Component={Component}
    Source={Source}
    highlightLines="2"
    undent={4}
    expand
  >
    <p>
      The <code>className</code> property can be used to set the CSS class
      for the buttons container element.  The default value is{' '}
      <code>buttons</code>.  If you want to use the default styles provided
      by Badger CSS then you should include <code>buttons</code> in the
      value you provide for <code>className</code>
    </p>
  </Example>

export default ClassName