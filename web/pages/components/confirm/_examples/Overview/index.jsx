import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Confirm = () =>
  <>
    <p className="large">
      The <code>Confirm</code> component provides an extra safety net
      for potentially dangerous operations.  When the user click on the
      button it then prompts them to confirm or cancel the action.
    </p>
    <p>
      Additional properties not listed below are forwarded onto the initial
      button.  For example, you can set the <code>text</code>,{' '}
      <code>color</code>, add icons, and so on, just like you would for any
      other button.
    </p>
    <Example
      Component={Component}
      code={Source}
      expand
    />
  </>

export default Confirm