import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Path = () =>
  <Example
    code="path"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      You can specify the data for a path.  The default viewbox is assumed to
      be 512px wide and 512px high.  You can set the <code>width</code> and{' '}
      <code>height</code> properties to change that.
    </p>
  </Example>

export default Path