import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { DetailsLink } from '@/site/Links.jsx'

const Items = () =>
  <Example
    code="items"
    Component={Component}
    Source={Source}
    highlightLines="3-21"
    undent={2}
    expand
  >
    <p>
      The <code>items</code> property should be used to define an array
      of items to appear in the accordion.
    </p>
    <p>
      Each item should define a <code>summary</code> and main <code>content</code>,
      which can either be strings or JSX fragments.  Any other properties will
      be forwarded on to the <DetailsLink/> component.
    </p>
  </Example>

export default Items