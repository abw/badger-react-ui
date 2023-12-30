import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Options = () =>
  <Example
    code="options"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>options</code> property should be used to define an array of
      options to display in the menu.
    </p>
    <p>
      Each element in the array should contain a <code>text</code> property
      which can be a string or JSX fragment.  A <code>className</code> can
      be included to set the CSS class.  The content for an element is
      rendered using the <code>WithIcon</code> component from{' '}
      <a href="https://abw.github.io/badger-icon/">Badger Icon</a> allowing
      you to include <code>iconLeft</code> and <code>iconRight</code> to add
      icons to either side, along with <code>iconLeftClass</code> and{' '}
      <code>iconRightClass</code> to set CSS classes for those icons.
    </p>
  </Example>

export default Options