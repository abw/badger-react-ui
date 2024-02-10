import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Fill = () =>
  <Example
    code="fill"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>fill</code> property can be used to fill the icon.
    </p>
  </Example>

export default Fill
