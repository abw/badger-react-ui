import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DisplayOption = () =>
  <Example
    code="displayOption"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      If an option is a text string then it will be displayed as it is.
      If it&apos;s an object containing a <code>text</code>,{' '}
      <code>label</code> or <code>name</code> property then that will be
      used as the display value.  Otherwise you can provide a{' '}
      <code>displayOption</code> function to display the result any way
      you like.
    </p>
  </Example>

export default DisplayOption
