import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { PagerLink } from '@/site/Links.jsx'

const Pager = () =>
  <Example
    code="pager"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={4}
    expand
  >
    <p>
      The <code>pager</code> property can be used to pass configuration
      options to the <PagerLink/> component
      displayed underneath the datatable.
    </p>
  </Example>

export default Pager