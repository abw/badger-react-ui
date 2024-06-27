import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Extras     from './Extras.jsx'
import ExtrasSrc  from './Extras.jsx?raw'
import DescTable  from '@/web/site/DescTable.jsx'
import { CodeHashLink, RangeLink } from '@/web/site/Links.jsx'

const RangeMinMax = () =>
  <>
    <p className="large">
      The <code>RangeMinMax</code> component implements a custom range input
      that allows you to set a minimum and maximum value.
    </p>
    <Example
      Component={Component}
      code={Source}
    />
    <p>
      It has similar functionality to the <RangeLink/> component but both ends
      of the range can be dragged or updated using the inputs.
    </p>
    <Example
      Component={Extras}
      code={ExtrasSrc}
      undent={2}
    />

    <h2>Context</h2>
    <p>
      A react context is created which provides the items listed below.
      Any other properties passed in to the component will also be
      accessible to child components.
    </p>
    <p>
      Custom components can be wrapped with the <code>RangeMinMaxConsumer</code>{' '}
      higher order component to receive these items as properties.  Or you
      can use the <code>useRangeMinMax</code> hook to access them.
    </p>
    <DescTable
      items={[
        ['min',           'The minimum value'],
        ['max',           'The maximum value'],
        ['range',         'The range from `min` to `max`'],
        ['step',          'The step size or `any` if there is no stepping'],
        ['steps',         'The number of steps covering the range'],
        ['minValue',      'The current value of the minimum end of the selected range.'],
        ['maxValue',      'The current value of the maximum end of the selected range.'],
        ['minInput',      'The current value of the minimum input component.'],
        ['maxInput',      'The current value of the maximum input component.'],
        ['minNormal',     'The `minValue` normalised to the range `0` to `1`'],
        ['maxNormal',     'The `maxValue` normalised to the range `0` to `1`'],
        ['minPercent',    'The `minValue` as a percentage of the range'],
        ['maxPercent',    'The `maxValue` as a percentage of the range'],
        ['onClick',       'Mouse click handler for the `Track` component'],
        ['onMouseDownMin','Mouse handler for the `ThumbMin` component'],
        ['onMouseDownMax','Mouse handler for the `ThumbMax` component'],
        ['onKeyDownMin',  'Keyboard handler for the `ThumbMin` component'],
        ['onKeyDownMax',  'Keyboard handler for the `ThumbMax` component'],
        ['setMinValue',   'Function to set the `minValue`'],
        ['setMaxValue',   'Function to set the `maxValue`'],
        ['setMinInput',   'Function to set the `minInput` value'],
        ['setMaxInput',   'Function to set the `maxInput` value'],
        ['stepMinUp',     'Function to increment the `minValue` by one step'],
        ['stepMaxUp',     'Function to increment the `maxValue` by one step'],
        ['stepMinDown',   'Function to decrement the `minValue` by one step'],
        ['stepMaxDown',   'Function to decrement the `maxValue` by one step'],
        ['quantize',      'Function to quantize a `value` to any defined `step`'],
        ['normalToValue', 'Function to convert a normalised value (0-1) to the range (min-max)'],
        ['valueToNormal', 'Function to convert a ranged value (min-max) to a normalised value (0-1)'],
        ['rangeProps',    'Properties for the range `Content` component'],
      ]}
    />
  </>

export default RangeMinMax