import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { IconLink } from '@/web/site/Links.jsx'

const WithIcons = () =>
  <Example
    code="iconRight"
    Component={Component}
    Source={Source}
    highlightLines="4,10"
    undent={4}
    expand
  >
    <p>
      The <code>iconRight</code> property should be used when you want to render
      an icon to the right of some text.  It can be a string indicating the icon
      name or an object containing the <code>name</code> and any properties
      supported by the <IconLink/> component.
    </p>
  </Example>

export default WithIcons