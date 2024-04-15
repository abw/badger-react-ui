import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ValidOption = () =>
  <Example
    code="validOption"
    Component={Component}
    Source={Source}
    highlightLines="19"
    expand
  >
    <p>
      The <code>validOption</code> property can be used to provide a function
      that determines if an option is valid and can be selected.  The default
      function uses the <code>disabled</code> property in an option to
      identify invalid options.
    </p>
    <p>
      In this example we define a <code>validOption</code> function which
      rejects any options that have the <code>isFruit</code> flag set.
    </p>
  </Example>

export default ValidOption
