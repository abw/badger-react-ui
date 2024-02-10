import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const Fill = () =>
  <Example
    code="stroke"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>stroke</code> property can be used to set a stroke thickness,
      using one of the semantic names: <code>thinnest</code>,{' '}
      <code>thinner</code>, <code>thin</code>, <code>thick</code>,{' '}
      <code>thicker</code> or <code>thickest</code>.
    </p>
    <p>
      The <code>stroke</code> can be set to <code>false</code> to disable
      the outline stroke (although you won&apos;t see anything unless you
      also enable <HashLink text="fill"/>)
    </p>
  </Example>

export default Fill
