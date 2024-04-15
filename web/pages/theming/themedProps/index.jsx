import React        from 'react'
import Example      from '@/site/Example.jsx'
import Component    from './_examples/ThemedProps.jsx'
import Source       from './_examples/ThemedProps.jsx?raw'

const ThemedProps = () =>
  <div className="flow">
    <h1>themedProps</h1>
    <p>
      The <code>themedProps()</code> utility function can be used to automatically
      generate a set of properties from one or more variants.  It should be
      passed the component properties as the first argument.  The second argument
      should be an object containing one or more entries mapping a property to
      a set of default properties.  In this example we use the <code>action</code> property
      to provide defaults for the button component.
    </p>
    <Example
      Component={Component}
      code={Source}
      highlightLines="23-25"
      expand
    />
  </div>

export default ThemedProps
