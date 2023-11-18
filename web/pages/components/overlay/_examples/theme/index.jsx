import React      from 'react'
import Example    from '@/web/site/Example.jsx'
import Section    from '@/page/Section.jsx'
import Light      from './Light.jsx'
import LightSrc   from './Light.jsx?raw'
import Dark       from './Dark.jsx'
import DarkSrc    from './Dark.jsx?raw'

const Theme = () =>
  <Section code="light / dark">
    <p>
      The default overlay color is white in light mode and black in dark
      mode.  You can add the <code>light</code> or <code>dark</code>{' '}
      property to explicitly set it to one or the other.
    </p>
    <Example
      Component={Light}
      code={LightSrc}
      caption="light"
      undent={8}
    />
    <Example
      Component={Dark}
      code={DarkSrc}
      caption="dark"
      undent={8}
    />
  </Section>

export default Theme
