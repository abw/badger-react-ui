import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { DivLink, FlexLink } from '@/web/site/Links.jsx'

const StylePropsClasses = () =>
  <Example
    code="stylePropsClasses"
    Component={Component}
    Source={Source}
  >
    <p>
      The <code>stylePropsClasses</code> utility function first calls
      the <code>styleProps()</code> function and then merges in any remaining
      properties into the CSS class.
    </p>
    <p>
      This is used by the <DivLink/> and <FlexLink/> element components,
      for example.
    </p>
  </Example>

export default StylePropsClasses
