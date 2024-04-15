import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Shadow = () =>
  <Example
    code="shadow"
    Component={Component}
    Source={Source}
    highlightLines={ line => line % 4 === 0 }
    undent={2}
    expand
  >
    <p>
      The <code>shadow</code> property can be used to add a shadow.  The
      default value is 1 or you can set it to any number from{' '}
      1 to 5.
    </p>
  </Example>

export default Shadow