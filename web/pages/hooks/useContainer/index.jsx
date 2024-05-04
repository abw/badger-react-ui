import React        from 'react'
import Example      from '@/site/Example.jsx'
import Component    from './_examples/useContainer.jsx'
import Source       from './_examples/useContainer.jsx?raw'

const UseContainer = () =>
  <div className="flow">
    <h1>useContainer</h1>
    <p className="large">
      The hook can be used to monitor the width and height of the content area
      of an element.
    </p>
    <p>
      It returns a <code>ref</code> which should be attached to the element
      you want to monitor.  It also returns the element <code>width</code> and{' '}
      <code>height</code> in pixels (rounded to the nearest integer) and the{' '}
      <code>breakpoint</code> name corresponding to the width.
    </p>
    <p>
      The <code>width</code> and <code>height</code> refer to the size of the
      element&apos;s content area.  That is the internal size inside any borders
      or padding. The <code>boxWidth</code> and <code>boxHeight</code> are also
      provided if you want the external size.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </div>

export default UseContainer
