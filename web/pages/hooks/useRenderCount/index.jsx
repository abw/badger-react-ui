import React        from 'react'
import Example      from '@/site/Example.jsx'
import Component    from './_examples/useRenderCount.jsx'
import Source       from './_examples/useRenderCount.jsx?raw'

const UseRenderCount = () =>
  <div className="flow">
    <h1>useRenderCount</h1>
    <p className="large">
      This simple hook is useful for debugging UI components.  It returns
      a counter which is incremented every time the component is rendered.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </div>

export default UseRenderCount
