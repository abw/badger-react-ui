import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Extras     from './Extras.jsx'
import ExtrasSrc  from './Extras.jsx?raw'
import MinMax     from './MinMax.jsx'
import MinMaxSrc  from './MinMax.jsx?raw'
import DescTable  from '@/web/site/DescTable.jsx'

const Range = () =>
  <>
    <p className="large">
      The <code>Range</code> component implements a custom range input.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
    <p>
      The custom range component offers the same functionality as the native
      HTML input with some additional functionality and display options.
      Furthermore, the custom component is <i>considerably</i> easier to
      style consistently across browsers.
    </p>
    <Example
      Component={Extras}
      code={ExtrasSrc}
      undent={2}
    />
    <p>
      Another advantages of this custom range component over the native HTML
      element is that it supports a double-ended range where both the minimum
      and maximum values can be set.
    </p>
    <Example
      Component={MinMax}
      code={MinMaxSrc}
    />

    <h2>Context</h2>
    <p>
      A react context is created which provides the items listed below.
      Any other properties passed in to the component will also be
      accessible to child components.
    </p>
    <p>
      Custom components can be wrapped with the <code>RangeConsumer</code>{' '}
      higher order component to receive these items as properties.  Or you
      can use the <code>useRange</code> hook to access them.
    </p>
    <DescTable
      items={[
        ['min',           'The minimum value'],
        ['max',           'The maximum value'],
        ['range',         'The range from `min` to `max`'],
        ['step',          'The step size or `any` if there is no stepping'],
        ['steps',         'The number of steps covering the range'],
        ['value',         'The current input value.'],
        ['normal',        'The `value` normalised to the range `0` to `1`'],
        ['percent',       'The `value` as a percentage of the range'],
        ['quantize',      'A function to quantize a `value` to any defined `step`'],
      ]}
    />
  </>

export default Range