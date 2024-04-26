import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { SelectLink } from '@/web/site/Links.jsx'

const FilterComponent = () =>
  <Example
    code="filterComponent"
    Component={Component}
    Source={Source}
    highlightLines="13-21"
    undent={2}
    expand
  >
    <p>
      The <code>filterComponent</code> property can be used to define a
      component for rendering the filter for a column.  This example uses
      a <SelectLink/> component to display a pull-down menu for the filtering
      of the Animal column.
    </p>
  </Example>

export default FilterComponent