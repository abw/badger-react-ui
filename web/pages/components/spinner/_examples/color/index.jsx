import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Color = () =>
  <Example
    code="color"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>color</code> property can be used to set the base color.
      The default value is <code>brand</code> which can be set as the
      brand color for your site.
    </p>
    <p>
      This is simply a shortcut to add the specified <code>color</code> as a
      CSS class to the icon.
    </p>
  </Example>

export default Color
