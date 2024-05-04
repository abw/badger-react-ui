import React        from 'react'
import Example      from '@/site/Example.jsx'
import Component    from './_examples/useFloating.jsx'
import Source       from './_examples/useFloating.jsx?raw'

const UseFloating = () =>
  <div className="flow">
    <h1>useFloating</h1>
    <p className="large">
      This hook is a wrapper around the{' '}
      <a href="https://floating-ui.com/" target="_blank" rel="noreferrer">Floating UI</a>{' '}
      library for creating floating elements.  It is used to position the
      dropdown and dropdown menu elements, for example.
    </p>
    <p>
      The <code>placement</code> option specifies the position of the
      floating element relative to the parent.  The default value is <code>bottom-start</code>,
      or the <code>right</code> option can be specified as a shortcut to set it
      to <code>bottom-end</code>See the{' '}
      <a href="https://floating-ui.com/docs/useFloating#placement" target="_blank" rel="noreferrer">Floating UI documentation</a>{' '}
      for details of the available options.  The <code>offset</code> can be provided
      as an offset distance in pixels.  The <code>matchWidth</code> and{' '}
      <code>matchHeight</code> options will make the floating element match the
      parent&apos;s width and height respectively.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </div>

export default UseFloating
