import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Border = () =>
  <Example
    code="border"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>border</code> property can be used to add a CSS class
      to add a border around the component.  By itself it will add a one
      pixel border.  You can also set it to an integer (in pixels) for a
      wider border.  The same border width will also be applied to the
      line separating the summary and content when the <code>lined</code>{' '}
      property is used.
    </p>
  </Example>

export default Border