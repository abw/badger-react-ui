import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const GridExample = () =>
  <Example
    code="breakpoints"
    Component={Component}
    Source={Source}
    highlightLines="1"
    expand
    undent={2}
  >
    <p>
      The <code>widescreen</code>, <code>desktop</code>, <code>laptop</code>,{' '}
      <code>tablet</code> and <code>mobile</code> properties can be used to
      set the number of columns for the grid when the container drops below
      the corresponding breakpoint size.  Note that this is based on the size
      of the grid container, not the browser window.
    </p>
  </Example>

export default GridExample
