import React      from 'react'
import Example    from '@/page/ExampleSection.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import { CodeHashLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Example
    code="valueLocations"
    Component={Component}
    Source={Source}
    highlightLines="6,10,14"
    undent={4}
    expand
  >
    <p>
      The <code>valueLocations</code> property (or <code>valueLocation</code> as
      an alias) can be set to specify the alignments of the current values.
      The default value is <code>thumb</code> which will align the values with
      their respective draggable thumbs.  It can also be set to <code>limits</code>{' '}
      which will place the minium value at the left edge and the maximum value
      at the right.
    </p>
    <p>
      This option only has an effect when <CodeHashLink id="showValues"/> is set.
      You can also use the <code>minValueLocation</code> and <code>maxValueLocation</code> properties
      to set them individually.  The value specified will be added as a CSS
      class to the corresponding value element.
    </p>
  </Example>

export default RangeExample