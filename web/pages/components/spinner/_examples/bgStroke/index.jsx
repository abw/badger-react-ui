import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const BgStroke = () =>
  <Example
    code="bgStroke"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>bgStroke</code> property can be used to set the stroke width
      of a background icon.
      It only has any effect when <HashLink text="bgIcon"/> is set.
    </p>
    <p>
      It can be set to <code>true</code> to get the
      default stroke width, or one of the semantic names: <code>thinnest</code>,{' '}
      <code>thinner</code>, <code>thin</code>, <code>thick</code>,{' '}
      <code>thicker</code> or <code>thickest</code>.
    </p>
  </Example>

export default BgStroke
