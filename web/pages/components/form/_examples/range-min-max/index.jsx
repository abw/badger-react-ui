import React      from 'react'
import Example    from '@/site/Example.jsx'
import Simple     from './Simple.jsx'
import SimpleSrc  from './Simple.jsx?raw'
import Object     from './Object.jsx'
import ObjectSrc  from './Object.jsx?raw'
import Section    from '@/page/Section.jsx'
import { RangeLink } from '@/web/site/Links.jsx'

const RangeExample = () =>
  <Section code="range-min-max">
    <p>
      The field <code>type</code> property can be set to <code>range-min-max</code>{' '}
      (or <code>rangeminmax</code>, <code>rangeMinMax</code>, etc.) to use
      the <RangeLink/> component.
    </p>
    <p>
      You can define additional properties in the field that will be forwarded
      to the select component.  For example, the <code>max</code> property
      is set in this example to set the maximum value for the range.
    </p>
    <Example
      Component={Simple}
      code={SimpleSrc}
      highlightLines="5"
    />
    <p>
      The <code>value</code> and/or <code>default</code> can be specified as
      an array of two values representing the <code>minValue</code> and{' '}
      <code>maxValue</code> for the selected range.  When the range is changed
      the values are returned as an array by default.
    </p>
    <p>
      You can also specify the <code>value</code> or <code>default</code> as
      an object containing <code>min</code> and <code>max</code> properties.
      A <code>changeValue</code> function can be defined to convert the
      minimum and maximum values back into an object when changes are made.
    </p>
    <Example
      Component={Object}
      code={ObjectSrc}
      highlightLines="6-7"
    />
  </Section>

export default RangeExample
