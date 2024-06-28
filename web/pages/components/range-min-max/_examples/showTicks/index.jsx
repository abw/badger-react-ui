import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const ShowTicks = () =>
  <Example
    code="showTicks"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="4"
    expand
  >
    <p>
      The <code>showTicks</code> property can be specified to display a
      series of ticks along the slider to indicate the steps.  This is only
      valid when the <CodeHashLink id="step"/> property is set.  Note, however, that
      the default value for <CodeHashLink id="step"/> is <code>1</code> and the default
      values for <CodeHashLink id="min"/> and <CodeHashLink id="max"/> are{' '}
      <code>0</code> and <code>100</code>, respectively.  So you&apos;ll get
      100 ticks by default which probably isn&apos;t what you want.
    </p>
    <p>
      See the <CodeHashLink id="tickStep"/> property below which allows you to
      set a different step for the ticks.
    </p>
  </Example>

export default ShowTicks