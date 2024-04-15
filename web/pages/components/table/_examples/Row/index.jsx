import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Row = () =>
  <Example
    code="Row"
    Component={Component}
    Source={Source}
    highlightLines="14-25,30"
    expand
  >
    <p>
      The <code>Row</code> property allows you to define your own component
      for rendering rows.  It can generate the cells directly or use the{' '}
      <code>TableCell</code> component to generate them.
    </p>
    <p>
      It will be passed a <code>th</code> flag indicating if the row is
      expected to generate <code>th</code> cells instead of <code>td</code>.
      This would be true when the table header is being rendered.  You can
      forward this property to the <code>TableCell</code> component and it
      will take care of it for you.
    </p>
    <p>
      The <code>cellProps</code> utility function can be used to handle
      cells that are either simple values (strings, numbers, etc) and those
      that are objects.  It will convert a simple value to an object of the
      form <code>{'{'} text: ... {'}'}</code>
    </p>
  </Example>

export default Row
