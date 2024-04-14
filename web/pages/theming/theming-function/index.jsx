import React        from 'react'
import Example      from '@/site/Example.jsx'
import Component    from './_examples/ThemingFunction.jsx'
import Source       from './_examples/ThemingFunction.jsx?raw'

const ThemingFunction = () =>
  <div className="flow">
    <h1>Theming Function</h1>
    <p>
      You can also define a theming function.  The function will be passed any
      properties that have been specified with the component. It should return
      a set of properties that will be applied to the component.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
  </div>

export default ThemingFunction
