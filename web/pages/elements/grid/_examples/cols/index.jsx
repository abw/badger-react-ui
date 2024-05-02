import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const GridExample = () =>
  <Example
    code="cols"
    Component={Component}
    Source={Source}
    highlightLines="1,5,9"
    expand
    undent={4}
  >
    <p>
      The <code>cols</code> property allows you to specify the number of
      columns.  The default value is 1, giving a single column grid.  Although
      this might not seem very useful at first glance, adding a <code>gap</code> is
      a convenient way to add vertical spacing between elements.
    </p>
  </Example>

export default GridExample
