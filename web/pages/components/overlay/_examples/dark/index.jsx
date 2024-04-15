import React      from 'react'
import Example    from '@/web/site/Example.jsx'
import Section    from '@/page/Section.jsx'
import Dark       from './Dark.jsx'
import DarkSrc    from './Dark.jsx?raw'

const DarkExample = () =>
  <Section code="dark">
    <p>
      Add the <code>dark</code> property to explicitly set it to be dark.
    </p>
    <Example
      Component={Dark}
      code={DarkSrc}
      highlightLines="2"
      caption="dark"
      undent={8}
    />
  </Section>

export default DarkExample
