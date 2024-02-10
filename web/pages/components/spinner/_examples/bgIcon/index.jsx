import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const BgIcon = () =>
  <Example
    code="bgIcon"
    Component={Component}
    Source={Source}
    undent={2}
    expand
  >
    <p>
      The <code>bgIcon</code> property can be used to set a background
      icon. The default value is <code>false</code>.  When the{' '}
      <code>bgIcon</code> is set the main icon is shrunk to fit inside it.
      You can control the level of shrinkage using the{' '}
      <HashLink text="shrink"/> property.
    </p>
  </Example>

export default BgIcon
