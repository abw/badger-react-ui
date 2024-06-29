import React      from 'react'
import Example    from '@/site/Example.jsx'
import Simple     from './Simple.jsx'
import SimpleSrc  from './Simple.jsx?raw'
import Section    from '@/page/Section.jsx'
import { RangeLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Section code="range-min-max">
    <p>
      The field <code>type</code> property can be set to <code>range-min-max</code>{' '}
      (or <code>rangeminmax</code>, <code>rangeMinMax</code>, etc.) to use
      the <RangeLink/> component.
    </p>
    <Example
      Component={Simple}
      code={SimpleSrc}
      highlightLines="5"
    />
    <p>
      You can define additional properties in the field that will be forwarded
      to the select component.  For example, the <code>max</code> property
      is set in the above example to set the maximum value for the range.
    </p>
  </Section>

export default RangeExample
