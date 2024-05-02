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
      you want to monitor.  It also returns the element width and height
      in pixels (rounded to the nearest integer) and the breakpoint name
      corresponding to the width.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </div>

export default UseContainer
