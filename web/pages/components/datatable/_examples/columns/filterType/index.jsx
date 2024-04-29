import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'

const FilterType = () =>
  <Example
    code="filterType"
    Component={Component}
    Source={Source}
    undent={2}
    highlightLines="4-18"
    expand
  >
    <p>
      The <code>filterType</code> property can be used to define a different
      type for the filtering component.  This is typically set to <code>select</code>{' '}
      when you want to implement a dropdown menu for filtering, but want to
      use a different column <code>type</code> (e.g. <code>number</code>) for
      sorting.
    </p>
    <p>
      In this example we define the <code>filterType</code> for the <code>id</code>{' '}
      column to be <code>select</code>, with the main <code>type</code> set to{' '}
      <code>id</code>.  The objects in the <code>selectOptions</code> array
      have a <code>value</code> which is a range for filtering ids.  The{' '}
      <code>filter</code> function then uses that to filter rows.

    </p>
  </Example>

export default FilterType