import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Checkbox = () =>
  <>
    <p className="large">
      The <code>Checkbox</code> component renders a checkbox with a label.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Checkbox