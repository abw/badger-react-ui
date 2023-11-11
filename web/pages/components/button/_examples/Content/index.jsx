import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Split from '@/web/site/Split.jsx'

const Content = () =>
  <Example
    code="Content"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <Split>
      <p>
        The <code>Content</code> property (note the capital C) can be used
        to provide an alternate component to render the button content.
        By default it uses <code>WithIcons</code> to render the button
        text with optional icons.
      </p>
      <p>
        If you want to change the way that button content is generated on a
        global level then you can use the theming engine to define a
        different <code>Content</code> component for all buttons.
      </p>
    </Split>
  </Example>

export default Content