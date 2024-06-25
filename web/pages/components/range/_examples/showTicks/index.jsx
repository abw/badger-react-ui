import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const ShowTicks = () =>
  <Example
    code="showTicks"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="3"
    expand
  >
    <p>
      The <code>showTicks</code> property can be specified to display a
      series of ticks along the slider to indicate the steps.  This is only
      valid when the <code>step</code> property is set.  Note, however, that
      the default value for <code>step</code> is <code>1</code> and the default
      values for <code>min</code> and <code>max</code> are <code>0</code> and{' '}
      <code>100</code> respectively.  So you&apos;ll get 100 ticks by default
      which probably isn&apos;t what you want.
    </p>
  </Example>

export default ShowTicks