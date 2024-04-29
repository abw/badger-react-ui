import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import HashLink from '@/web/page/HashLink.jsx'

const Type = () =>
  <Example
    code="select"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="8-11"
    expand
  >
    <p>
      The column <code>type</code> can be set to <code>select</code> when
      you have a pre-defined set of values for the column data.  The filter
      for this column will be a dropdown menu populated with items defined
      as the <code>selectOptions</code> array.  Each element in the array
      can be either a simple value (e.g. string, number or boolean), or an
      object containing a <code>value</code> to use for filtering and{' '}
      <code>text</code> to display in the dropdown menu.
    </p>
    <p>
      This column type assumes that the values can be filtered by an exact
      match and that rows can be sorted using a string comparison.  For more
      flexibility, you can set the column <code>type</code> to a different
      value (e.g. <code>number</code>, etc) and set the <HashLink text="filterType"/>{' '}
      to <code>select</code> to use a dropdown menu for filtering.  A{' '}
      <HashLink text="filter"/> function can then be provided to handle the
      filtering.
    </p>
  </Example>

export default Type