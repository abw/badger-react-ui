import React        from 'react'
import Example      from '@/site/Example.jsx'
import Sections     from '@/web/page/Sections.jsx'
import Component    from './_examples/useComplexState.jsx'
import Source       from './_examples/useComplexState.jsx?raw'
import Functions    from './_examples/functions/index.jsx'
import OnChange     from './_examples/onChange/index.jsx'

const UseComplexState = () =>
  <div className="flow">
    <h1>useComplexState</h1>
    <p className="large">
      This hook is a wrapper around <code>React.useState</code> which can
      be used to maintain a complex state object.
    </p>
    <p>
      Call the{' '}
      <code>useComplexState()</code> function passing it an object containing
      one or more key/values pairs.  It will return an array of{' '}
      <code>[state, setters]</code>, where the <code>state</code> contains
      the current state, starting with the values you supplied, and the{' '}
      <code>setters</code> is an object containing setter functions for each
      item in the state.
    </p>
    <p>
      If you provide an item in the state called <code>badgers</code>, for
      example, then the corresponding setter function will be called{' '}
      <code>setBadgers</code>.
    </p>
    <Example
      Component={Component}
      code={Source}
    />

    <Sections tocName="useComplexState">
      <Functions/>
      <OnChange/>
    </Sections>
  </div>

export default UseComplexState
