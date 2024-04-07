import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Tabs = () =>
  <Example
    code="tabs"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>tabs</code> property should be used to define an array of
      objects containing properties for each tab.  This can
      include <code>text</code> for the tab text, <code>icon</code> for a
      tab icon, <code>iconLeft</code> and <code>iconRight</code> for
      icons to appear either side of the text, and <code>disabled</code> to
      disable the tab
    </p>
    <p>
      A <code>content</code> property can be defined containing the content
      that should be rendered when the tab is select. Alternately you can
      provide a <code>Component</code> which should be a React component.
      This will be passed the active <code>tab</code> as a property.
    </p>
  </Example>

export default Tabs
