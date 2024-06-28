import React      from 'react'
import Section    from '@/web/page/Section.jsx'
import { RangeLink } from '@/web/site/Links.jsx'

const Context = () =>
  <Section title="Context Properties">
    <p>
      The component uses the same context object as for the <RangeLink/>{' '}
      component.
    </p>
    <p>
      Custom components can be wrapped with the <code>RangeConsumer</code>{' '}
      higher order component to receive these items as properties.  Or you
      can use the <code>useRange</code> hook to access them.
    </p>
  </Section>

export default Context