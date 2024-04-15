import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Custom = () =>
  <Example
    title="Custom Colors"
    Component={Component}
    Source={Source}
    highlightLines="3-7"
    undent={8}
  >
    <p>
      You can set the <code>--color</code> and <code>--background-color</code>{' '}
      CSS properties to define your own colors for the overlay.  The{' '}
      <code>--background-opacity</code> can be set to change the background
      opacity.
    </p>
  </Example>

export default Custom
