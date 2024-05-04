import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Breakpoint = () =>
  <Example
    code="breakpoint"
    Component={Component}
    Source={Source}
    highlightLines="2"
    undent={2}
    expand
  >
    <p>
      The <code>breakpoint</code> property can be used to set a breakpoint
      to switch between the normal DataTable view and the expanded DataTables
      view.  This can be an integer number of pixels, a string indicating
      the width in pixels (e.g. <code>&quot;600px&quot;</code>) or rems
      (e.g. <code>&quot;30rem&quot;</code>), or one of the semantic breakpoint
      names (<code>mobile</code>, <code>tablet</code>, <code>laptop</code>,{' '}
      <code>desktop</code> or <code>widescreen</code>).
    </p>
    <p>
      When the container width is less than the breakpoint width, the data
      will be displayed as separate tables (e.g. using <code>DataTables</code>).
      When the width is greater it will be displayed in a single table (e.g.
      using <code>DataTable</code>).
    </p>
  </Example>

export default Breakpoint