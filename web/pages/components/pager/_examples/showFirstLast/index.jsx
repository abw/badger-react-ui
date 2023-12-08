import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ShowFirstLast = () =>
  <Example
    code="showFirstLast"
    Component={Component}
    Source={Source}
    undent={4}
  >
    <p>
      The <code>showFirstLast</code> property determines if the first
      and last pages are shown in the set of numbered page buttons.
      A button for the first page will be displayed when it is less than
      previous page.  The last page button will be displayed when it is
      greater than the next page.
    </p>
    <p>
      This value defaults to <code>true</code> but can be set{' '}
      <code>false</code> to hide these buttons.
    </p>
  </Example>

export default ShowFirstLast