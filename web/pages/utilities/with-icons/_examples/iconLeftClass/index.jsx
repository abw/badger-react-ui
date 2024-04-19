import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const WithIcons = () =>
  <Example
    code="iconLeftClass"
    Component={Component}
    Source={Source}
    highlightLines="5"
    undent={4}
    expand
  >
    <p>
      The <code>iconLeftClass</code> property is a shortcut for adding a CSS
      class to the icon on the left.  The <code>on-left</code> class will
      also be added which applies some default styling to space the icon away
      from the text.
    </p>
  </Example>

export default WithIcons