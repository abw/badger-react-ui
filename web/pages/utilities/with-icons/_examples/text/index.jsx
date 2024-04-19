import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const WithIcons = () =>
  <Example
    code="text"
    Component={Component}
    Source={Source}
    highlightLines="3,8"
    undent={4}
    expand
  >
    <p>
      The <code>text</code> property can be used to provide the text to be
      displayed.  This is a shortcut for defining the content as child elements.
    </p>
  </Example>

export default WithIcons