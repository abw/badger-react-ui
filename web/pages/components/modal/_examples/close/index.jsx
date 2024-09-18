import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Close = () =>
  <Example
    code="close"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={6}
    expand
  >
    <p>
      The <code>close</code> property can be used to automatically add a close
      icon to the top right corner.  It should be a function which will close
      the modal when the icon is clicked.  It will also be called when the user
      hits the Escape key.
    </p>
  </Example>

export default Close