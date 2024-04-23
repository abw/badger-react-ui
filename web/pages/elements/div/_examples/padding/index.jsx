import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const DivExample = () =>
  <Example
    code="padding"
    Component={Component}
    Source={Source}
    highlightLines="2,5,8,11"
    expand
    undent={2}
  >
    <p>
      The <code>padding</code> property (or <code>pad</code> for short) can be
      used to add padding to the element.  It can be one, two or fours numbers
      in units of 0.25em.  A single number is used for all four side.  Two
      numbers can be used for vertical and horizontal padding.  Four numbers
      can be used for the top, right, bottom and left padding.  When used as a
      boolean flag it defaults to 1 unit.
    </p>
  </Example>

export default DivExample
