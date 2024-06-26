import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Type = () =>
  <Example
    code="type"
    Component={Component}
    Source={Source}
    highlightLines="8-11"
    undent={2}
    expand
  >
    <p>
      The <code>type</code> property can be used to specify what kind of
      data type is used in the corresponding field in each row.
    </p>
    <p>
      The default value is <code>text</code> which will display (and sort)
      values as text.  You can also set it to <code>number</code>,{' '}
      <code>currency</code> or <code>boolean</code>.
    </p>
    <p>
      See the <a href="#column-types">Column Types</a> section
      below for further information.
    </p>
  </Example>

export default Type