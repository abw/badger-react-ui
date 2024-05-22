import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Header = () =>
  <Example
    code="maxWidth"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={6}
    expand
  >
    <p>
      The <code>maxWidth</code> property can be used as a shortcut to set
      the maximum width for the dialog.  Internally this adds a{' '}
      <code>--max-width</code> CSS custom property via a <code>style</code>{' '}
      attribute.
    </p>
  </Example>

export default Header