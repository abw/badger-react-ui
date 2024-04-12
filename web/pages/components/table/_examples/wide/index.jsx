import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Wide = () =>
  <Example
    code="wide"
    Component={Component}
    Source={Source}
    expand
    undent={2}
  >
    <p>
      The <code>wide</code> property is a shortcut to add the{' '}
      <code>wide</code> CSS class which sets the table width to be 100%
      of the parent element.
    </p>
  </Example>

export default Wide
