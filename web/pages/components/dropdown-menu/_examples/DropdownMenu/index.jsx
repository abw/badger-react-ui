import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Link from '@/web/ui/Link.jsx'

const Dropdown = () =>
  <>
    <p className="large">
      The <code>DropdownMenu</code> component generates a dropdown menu.  It
      extends the behaviour of the{' '}
      <Link to="/components/dropdown">Dropdown</Link> component.
    </p>
    <div className="cols-2 stack-desktop">
      <p>
        The default behaviour is to open the dropdown menu when the user
        clicks on the trigger.
      </p>
      <p>
        Keyboard navigation is also supported.  The user can <code>TAB</code>{' '}
        to the trigger and then press <code>SPACE</code>, <code>ENTER</code>,{' '}
        <code>DOWN</code> or <code>UP</code> to open the menu.
      </p>
      <p>
        Once the menu is open, the <code>DOWN</code> and <code>UP</code> keys{' '}
        can be used to select menu items, <code>ENTER</code> or{' '}
        <code>SPACE</code> will select the current item and <code>ESCAPE</code>{' '}
        will close the menu.
      </p>
    </div>
    <Example
      Component={Component}
      code={Source}
      // expand
    />
  </>

export default Dropdown