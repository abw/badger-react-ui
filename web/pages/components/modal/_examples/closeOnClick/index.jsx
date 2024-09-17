import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const CloseOnClick = () =>
  <Example
    code="closeOnClick"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={6}
    expand
  >
    <p>
      Add the <code>closeOnClick</code> property to trigger the{' '}
      <code>close</code> handler when a user click on the modal background
      outside the dialog.
    </p>
  </Example>

export default CloseOnClick