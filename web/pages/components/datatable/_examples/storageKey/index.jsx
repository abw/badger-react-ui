import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Pager = () =>
  <Example
    code="storageKey"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>storageKey</code> property can be used to provide a key
      to store the data table state in local storage.  This allows the page
      number, page size, visible columns, column order, sort column and sort
      direction to be preserved across visits to the page.
    </p>
    <p>
      Try changing some of those setting in the example below.  Then
      reload the browser page.  You should see the setting preserved.
    </p>
  </Example>

export default Pager