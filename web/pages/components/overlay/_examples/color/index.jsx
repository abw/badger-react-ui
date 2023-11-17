import React      from 'react'
import Example    from '@/web/site/Example.jsx'
import Section    from '@/page/Section.jsx'
import White      from './White.jsx'
import WhiteSrc   from './White.jsx?raw'
import Black      from './Black.jsx'
import BlackSrc   from './Black.jsx?raw'

const Color = () =>
  <Section code="color">
    <p>
      The default overlay color is white in light mode and black in dark
      mode.  You can set the <code>color</code> property to <code>white</code>{' '}
      or <code>black</code> to explicitly set it to one or the other.
    </p>
    <Example
      Component={White}
      code={WhiteSrc}
      caption="white"
      undent={8}
    />
    <Example
      Component={Black}
      code={BlackSrc}
      caption="black"
      undent={8}
    />
  </Section>

export default Color
