import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Name = () =>
  <Example
    code="name"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>name</code> property can be used to select an icon from the
      default icon library.
    </p>
    <p>
      Additional modifiers and classes can be added to the name to apply
      styles and transformations.  e.g. <code>arrow-right</code> rotates
      the <code>arrow</code> icon through 90&deg; so that it points to the
      right.
    </p>
    <p>
      The <code>name</code> can include multiple icons, each of which can
      have dashed modifiers and dotted CSS classes.  Each should be separated
      by whitespace.  The separate icons will be stack on top of each other
      to create a composite icon.
    </p>
    <p>
      See the <a href="https://abw.github.io/badger-icon/">Badger Icon</a> documentation
      for further details.
    </p>
  </Example>

export default Name