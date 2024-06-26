import React      from 'react'
import Example    from '@/site/Example.jsx'
import Component  from './Component.jsx'
import Source     from './Component.jsx?raw'
import Extras     from './Extras.jsx'
import ExtrasSrc  from './Extras.jsx?raw'
import DescTable  from '@/web/site/DescTable.jsx'
import { RangeLink } from '@/web/site/Links.jsx'

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
      It has similar functionality to the <RangeLink/> component.
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
        ['value',         'The current value.'],
        ['input',         'The current value of the input component.'],
        ['normal',        'The `value` normalised to the range `0` to `1`'],
        ['percent',       'The `value` as a percentage of the range'],
        ['rangeProps',    'Properties for the range `Content` component'],
        ['onMouseDown',   'Mouse handler for the `Thumb` component'],
        ['onKeyDown',     'Keyboard handler for the `Thumb` component'],
        ['onClick',       'Mouse click handler for the `Track` component'],
        ['setValue',      'Function to set the `value`'],
        ['setInput',      'Function to set the `input` value'],
        ['stepUp',        'Function to increment the `value` by one step'],
        ['stepDown',      'Function to decrement the `value` by one step'],
        ['quantize',      'Function to quantize a `value` to any defined `step`'],
        ['normalToValue', 'Function to convert a normalised value (0-1) to the range (min-max)'],
        ['valueToNormal', 'Function to convert a ranged value (min-max) to a normalised value (0-1)'],
      ]}
    />
  </>

export default RangeMinMax