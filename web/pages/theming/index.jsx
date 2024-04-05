import React from 'react'
import Example    from '@/site/Example.jsx'
import Theme      from './_examples/Theme.jsx'
import ThemeSrc   from './_examples/Theme.jsx?raw'

const Theming = () =>
  <div className="flow">
    <h1>Theming</h1>
    <p className="large">
      The components can be themed using{' '}
      <a href="https://abw.github.io/react-one-louder/">react-one-louder</a>.
    </p>
    <p>
      This allows you to define a theme that provides default properties
      for the various components in the library.
      Import the <code>Theme</code> component and define a{' '}
      <code>Theme.Provider</code> around your app or a section of it.
      Pass it your theme configuration as its properties.
    </p>
    <p>
      Any components rendered inside the provider context will use the
      default properties that you have defined.  In the example below we
      set the default <code>placeholder</code> for the <code>Select</code>{' '}
      component, and default <code>color</code> and <code>iconRight</code> properties
      for the <code>Button</code> component.
      These are only default values and can be overridden by providing a
      component with specific values, as shown for the second button in the
      example.
    </p>
    <Example
      Component={Theme}
      code={ThemeSrc}
      expand
    />
  </div>

export default Theming