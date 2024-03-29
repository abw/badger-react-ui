import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Type = () =>
  <Example
    code="type"
    Component={Component}
    Source={Source}
    undent={4}
    expand
  >
    <p>
      The <code>type</code> property can be used to specify what kind of
      data type is used in the corresponding field in each row.
    </p>
    <p>
      The default value is <code>string</code> which will display (and sort)
      values as strings.  You can also set it to <code>number</code>,{' '}
      <code>currency</code>, <code>boolean</code>, and others... (TODO)
    </p>
  </Example>

export default Type