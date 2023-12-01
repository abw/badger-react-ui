import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Demo       from './Demo.jsx'

const Icon = () =>
  <>
    <p className="large">
      The <code>Icon</code> component can be used to render SVG icons.
      The functionality is imported from{' '}
      <a href="https://abw.github.io/badger-icon/">Badger Icon</a> with
      some extra bells and whistles.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
    <h2>Demo</h2>
    <Demo/>
  </>

export default Icon