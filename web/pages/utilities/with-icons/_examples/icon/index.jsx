import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { IconLink } from '@/web/site/Links.jsx'

const WithIcons = () =>
  <Example
    code="icon"
    Component={Component}
    Source={Source}
    highlightLines="3,8"
    undent={4}
    expand
  >
    <p>
      The <code>icon</code> property should be used when you want to render
      an icon by itself.  It can be a string indicating the icon name or an
      object containing the <code>name</code> and any properties supported
      by the <IconLink/> component.
    </p>
  </Example>

export default WithIcons