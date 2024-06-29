import React      from 'react'
import Example    from '@/site/Example.jsx'
import Simple     from './Simple.jsx'
import SimpleSrc  from './Simple.jsx?raw'
import Section    from '@/page/Section.jsx'
import { RangeMinLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Section code="range-min">
    <p>
      The field <code>type</code> property can be set to <code>range-min</code>{' '}
      (or <code>rangemin</code>, <code>rangeMin</code>, etc.) to use
      the <RangeMinLink/> component.
    </p>
    <Example
      Component={Simple}
      code={SimpleSrc}
      highlightLines="5"
    />
  </Section>

export default RangeExample



