import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DisplayResult = () =>
  <Example
    code="displayResult"
    Component={Component}
    Source={Source}
    highlightLines="16-24,38"
    // expand
  >
    <p>
      If a result is a text string then it will be displayed as the result.
      If it&apos;s an object containing a <code>text</code>,{' '}
      <code>label</code> or <code>name</code> property then that will be
      used as the display value.  Otherwise you can provide a{' '}
      <code>displayResult</code> function to display the result any way
      you like.
    </p>
  </Example>

export default DisplayResult
