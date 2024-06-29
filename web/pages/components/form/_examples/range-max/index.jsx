import React      from 'react'
import Example    from '@/site/Example.jsx'
import Simple     from './Simple.jsx'
import SimpleSrc  from './Simple.jsx?raw'
import Section    from '@/page/Section.jsx'
import { RangeMaxLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Section code="range-max">
    <p>
      The field <code>type</code> property can be set to <code>range-max</code>{' '}
      (or <code>rangemax</code>, <code>rangeMax</code>, etc.) to use
      the <RangeMaxLink/> component.
    </p>
    <Example
      Component={Simple}
      code={SimpleSrc}
      highlightLines="5"
    />
  </Section>

export default RangeExample



