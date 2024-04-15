import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Label = () =>
  <Example
    code="label"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>label</code> property can be used to set the
      <code>aria-label</code> property on the button.  This typically
      doesn&apos;t have any visual effect on the button, but is used
      by screen readers to provide more detail about the functionality
      of the button.
    </p>
  </Example>

export default Label