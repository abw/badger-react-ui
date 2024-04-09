import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Selected = () =>
  <Example
    code="selected"
    Component={Component}
    Source={Source}
    expand
  >
    <p>
      The <code>selected</code> property should be used to indicate which
      option is selected.  This can be an object that contains the same{' '}
      <code>value</code> property as the option, or the numerical index of the
      item in the <code>options</code> list.  The default value is{' '}
      <code>0</code>, selecting the first option.
    </p>
  </Example>

export default Selected
