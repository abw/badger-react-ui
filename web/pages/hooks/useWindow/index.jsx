import React        from 'react'
import Example      from '@/site/Example.jsx'
import Component    from './_examples/useWindow.jsx'
import Source       from './_examples/useWindow.jsx?raw'

const UseWindow = () =>
  <div className="flow">
    <h1>useWindow</h1>
    <p className="large">
      The hook can be used to monitor the width and height of the browser window.
    </p>
    <p>
      As well as returning the window width and height in pixels it also
      returns the breakpoint name corresponding to the width.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </div>

export default UseWindow
