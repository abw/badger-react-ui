import React        from 'react'
import Name         from './Name.jsx'
import NameSrc      from './Name.jsx?raw'
import Object       from './Object.jsx'
import ObjectSrc    from './Object.jsx?raw'
import Section      from '@/page/Section.jsx'
import Example      from '@/site/Example.jsx'

const UnselectedIconExamples = () =>
  <Section code="unselectedIcon">
    <p>
      The <code>unselectedIcon</code> property can be used to specify the icon
      displayed on the right of unselected options.  There is no default value.
    </p>
    <Example
      Component={Name}
      code={NameSrc}
      caption="unselectedIcon"
      highlightLines="18"
      expand={false}
    />
    <p>
      The value can be a string corresponding to the icon <code>name</code>, as
      shown in the previous example, or an object containing multiple properties.
    </p>
    <Example
      Component={Object}
      code={ObjectSrc}
      caption="unselectedIcon"
      highlightLines="18"
      expand={false}
    />
  </Section>

export default UnselectedIconExamples
