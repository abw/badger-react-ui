import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DataTableConsumer = () =>
  <Example
    code="DataTableConsumer"
    Component={Component}
    Source={Source}
    highlightLines="23,32,37-41"
    undent={2}
    expand
  >
    <p>
      The <code>DataTableConsumer</code> function is a shortcut for accessing
      the DataTable context.  Wrap a function in it and the function will be
      passed all the context state items, along with any other properties
      passed to it.
    </p>
    <p>
      In this example we define a synthetic column, <code>n</code>, to
      display the row number.  The <code>display</code> function is passed
      the <code>rowIndex</code> which is the offset (starting at 0) in the
      current page of rows and the <code>DataTableConsumer</code> wrapper
      provides the current <code>page</code> data.
    </p>
  </Example>

export default DataTableConsumer