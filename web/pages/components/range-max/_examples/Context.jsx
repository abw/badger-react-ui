import React      from 'react'
import DescTable  from '@/web/site/DescTable.jsx'
import { Section } from '@abw/badger-website'
import { RangeLink } from '@/web/site/Links.jsx'

const Context = () =>
  <Section title="Context Properties">
    <p>
      The component uses the same context object as for the <RangeLink/>{' '}
      component. A number of aliases are provided in the context, listed in
      the table below.
    </p>
    <p>
      Custom components can be wrapped with the <code>RangeConsumer</code>{' '}
      higher order component to receive these items as properties.  Or you
      can use the <code>useRange</code> hook to access them.
    </p>
    <DescTable
      items={[
        ['value',     'Alias for `maxValue`'],
        ['input',     'Alias for `maxInput`'],
        ['normal',    'Alias for `maxNormal`'],
        ['percent',   'Alias for `maxPercent`'],
        ['setValue',  'Alias for `setMaxValue`'],
        ['setInput',  'Alias for `setMaxInput`'],
        ['stepUp',    'Alias for `stepMaxUp`'],
        ['stepDown',  'Alias for `stepMaxDown`'],
        ['onDrag',    'Alias for `onDragMax`'],
        ['onKeyDown', 'Alias for `onKeyDownMax`'],
      ]}
    />
  </Section>

export default Context