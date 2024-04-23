import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const GridClass = () =>
  <Example
    code="gridClass"
    Component={Component}
    Source={Source}
    highlightLines="12"
  >
    <p>
      The <code>gridClass</code> utility function can be used to construct
      a CSS class for a grid layout.  When used as a boolean flag it sets
      the CSS class to <code>grid-1</code> (useful for a single column layout
      where you want vertical gaps between each element).  Or it can be a
      number to set the number of columns, or <code>fit</code> or <code>fill</code> to
      add the <code>grid-fit</code> and <code>grid-fill</code> classes respectively.
    </p>
  </Example>

export default GridClass
