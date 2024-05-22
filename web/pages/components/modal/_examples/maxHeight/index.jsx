import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Header = () =>
  <Example
    code="maxHeight"
    Component={Component}
    Source={Source}
    highlightLines="4"
    undent={6}
    expand
  >
    <p>
      The <code>maxHeight</code> property can be used as a shortcut to set
      the maximum height for the dialog.  Internally this adds a{' '}
      <code>--max-height</code> CSS custom property via a <code>style</code>{' '}
      attribute.
    </p>
  </Example>

export default Header