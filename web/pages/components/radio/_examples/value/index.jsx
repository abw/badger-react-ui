import React      from 'react'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Example    from '@/page/ExampleSection.jsx'
import HashLink   from '@/page/HashLink.jsx'

const Value = () =>
  <Example
    code="value"
    Component={Component}
    Source={Source}
    highlightLines="5"
    expand
  >
    <p>
      The <code>value</code> property should be used to define the current
      selected value.  This should be used in conjunction with{' '}
      <HashLink text="onChange"/> to update the
      value.
    </p>
  </Example>

export default Value