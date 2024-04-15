import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const Sort = () =>
  <Example
    code="sort"
    Component={Component}
    Source={Source}
    highlightLines="12"
    undent={2}
    expand
  >
    <p>
      The <code>sort</code> property can be used to implement custom sorting.
      This is particularly useful if you have a composite column as shown in
      this example.
    </p>
    <p>
      Here we display a composite name constructed from the{' '}
      <code>forename</code> and <code>surname</code> fields.  The datatable
      can&apos;t automatically sort on the <code>name</code> column because
      there isn&apos;t a <code>name</code> column in the data.  So we define
      the <code>sort</code> property using the{' '}
      <a href="https://abw.github.io/badger-utils/sort.html#multiSort" target="_blank" rel="noreferrer">multisort</a>{' '}
      utility function from Badger Utils.  This returns a function that sorts
      the rows by surname first and then by forename.
    </p>
  </Example>

export default Sort