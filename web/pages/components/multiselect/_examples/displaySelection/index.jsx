import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DisplaySelection = () =>
  <Example
    code="displaySelection"
    Component={Component}
    Source={Source}
    highlightLines="5-13,18"
    expand
  >
    <p>
      Selected items are displayed using the same principle as for{' '}
      <a href="#displayoption" className="code">displayOption</a>.
      If an option is a text string then it will be displayed as it is.
      If it&apos;s an object containing a <code>text</code>,{' '}
      <code>label</code> or <code>name</code> property then that will be
      used as the display value.  Otherwise you can provide a{' '}
      <code>displaySelection</code> function to display the result any way
      you like.
    </p>
  </Example>

export default DisplaySelection
