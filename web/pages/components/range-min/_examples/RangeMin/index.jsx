import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Extras     from './Extras.jsx'
import ExtrasSrc  from './Extras.jsx?raw'
import { RangeLink } from '@/web/site/Links.jsx'

const Range = () =>
  <>
    <p className="large">
      The <code>RangeMin</code> component implements a custom range input
      for selecting the minimum end of a range.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
    <p>
      It is implemented as a wrapper around the <RangeLink/> component and
      exposes a subset of its functionality.  There is no thumb,
      value or input displayed for the <code>maxValue</code> and it effectively
      remains fixed at the <code>max</code> value.
    </p>
    <p>
      The <code>minValue</code> property has an alias of <code>value</code>{' '}
      and defaults to be half the range.  The properties relating to plural
      items in the <RangeLink/> component  (e.g. <code>showValues</code>,{' '}
      <code>showInputs</code>, etc.) also have aliases in the singular form
      (e.g. <code>showValue</code>, <code>showInput</code>, etc).  You can
      use either.
    </p>

    <Example
      Component={Extras}
      code={ExtrasSrc}
      undent={2}
    />
  </>

export default Range