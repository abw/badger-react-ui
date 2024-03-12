import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Link       from '@/ui/Link.jsx'

const UISelect = () =>
  <Example
    code="uiselect"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The field <code>type</code> property can be set to <code>uiselect</code>{' '}
      to use the <Link to="/components/select" text="Select"/> component.
    </p>
    <p>
      When an option is selected the default behaviour is to return the
      complete option.  You can use the <code>selectValue</code> property to
      define a function which will accept the option and return the relevant
      value from inside it
    </p>
  </Example>

export default UISelect