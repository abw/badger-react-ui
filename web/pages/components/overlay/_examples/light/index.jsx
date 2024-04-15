import React      from 'react'
import Example    from '@/web/site/Example.jsx'
import Section    from '@/page/Section.jsx'
import Light      from './Light.jsx'
import LightSrc   from './Light.jsx?raw'

const LightExample = () =>
  <Section code="light">
    <p>
      The default overlay color is white in light mode and black in dark
      mode.  You can add the <code>light</code> property to explicitly set it
      to be light.
    </p>
    <Example
      Component={Light}
      code={LightSrc}
      caption="light"
      highlightLines="2"
      undent={8}
    />
  </Section>

export default LightExample
