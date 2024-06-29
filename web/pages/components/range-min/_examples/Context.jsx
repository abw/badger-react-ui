import React      from 'react'
import Section    from '@/web/page/Section.jsx'
import DescTable  from '@/web/site/DescTable.jsx'
import { RangeLink } from '@/web/site/Links.jsx'

const Context = () =>
  <Section title="Context Properties">
    <p>
      The component uses the same context object as for the <RangeLink/>{' '}
      component.  A number of aliases are provided in the context, listed in
      the table below.
    </p>
    <p>
      Custom components can be wrapped with the <code>RangeConsumer</code>{' '}
      higher order component to receive these items as properties.  Or you
      can use the <code>useRange</code> hook to access them.
    </p>
    <DescTable
      items={[
        ['value',     'Alias for `minValue`'],
        ['input',     'Alias for `minInput`'],
        ['normal',    'Alias for `minNormal`'],
        ['percent',   'Alias for `minPercent`'],
        ['setValue',  'Alias for `setMinValue`'],
        ['setInput',  'Alias for `setMinInput`'],
        ['stepUp',    'Alias for `stepMinUp`'],
        ['stepDown',  'Alias for `stepMinDown`'],
        ['onDrag',    'Alias for `onDragMin`'],
        ['onKeyDown', 'Alias for `onKeyDownMin`'],
      ]}
    />

  </Section>

export default Context