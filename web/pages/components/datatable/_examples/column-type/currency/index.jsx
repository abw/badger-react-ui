import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Type = () =>
  <Example
    code="currency"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="9"
    expand
  >
    <p>
      The <code>type</code> can be set to <code>currency</code> for financial
      values. This will use a numerical comparison when sorting rows on this
      column and format the value for display using the{' '}
      <a
        href="https://abw.github.io/badger-utils/numbers.html#currency"
        target="_blank" rel="noreferrer"
      >currency()</a> function
    </p>
  </Example>

export default Type