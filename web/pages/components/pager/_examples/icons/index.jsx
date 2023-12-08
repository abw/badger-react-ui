import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Icons = () =>
  <Example
    code="prevIcon / nextIcon"
    Component={Component}
    Source={Source}
    undent={4}
  >
    <p>
      The <code>prevIcon</code> and <code>nextIcon</code> properties can be
      used to set the icons for the previous and next page button.
    </p>
  </Example>

export default Icons