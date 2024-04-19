import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const WithIcons = () =>
  <Example
    code="WithIcons"
    Component={Component}
    Source={Source}
    // highlightLines=""
    // undent={2}
    expand
  >
    <p>
      The <code>WithIcons</code> component is used by a number of other
      components to render text with optional icons on either side.
    </p>
  </Example>

export default WithIcons