import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const HeadIcon = () =>
  <Example
    code="headIcon"
    Component={Component}
    Source={Source}
    highlightLines="3"
    undent={2}
    expand
  >
    <p>
      The <code>headIcon</code> property can be used to add an icon to the
      headline.  The <code>headicon</code> (note the lower case &quot;i&quot;)
      is provided as an alias because there&apos;s at least one user (me) who
      forgets that it&apos;s supposed to have a capital &quot;I&quot; in the
      middle.
    </p>
  </Example>

export default HeadIcon