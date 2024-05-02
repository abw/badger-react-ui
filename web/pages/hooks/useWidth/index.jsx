import React        from 'react'
import Example      from '@/site/Example.jsx'
import Component    from './_examples/useWidth.jsx'
import Source       from './_examples/useWidth.jsx?raw'

const UseWidth = () =>
  <div className="flow">
    <h1>useWidth</h1>
    <p className="large">
      The hook can be used to monitor the width of an element, typically the
      window.
    </p>
    <p>
      As well as returning the window width it also returns the breakpoint
      name.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </div>

export default UseWidth
