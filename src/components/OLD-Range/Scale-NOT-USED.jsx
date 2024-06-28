import React from 'react'
import Context from './Context.js'
import { range } from '@abw/badger-utils'

// First attempt at displaying a scale.  It's really hard to get the alignment
// right.  I went for the easier (but more hacky) approach where the scale
// values are displayed under each tick using absolute positioning.  This
// causes some other problems, but I've worked around them for now.

const Scale = ({
  scaleClass='range-scale',
  scaleDivisionClass='range-scale-division',
  scaleValueClass='range-scale-value',
  scaleSteps,
  displayValue,
  normalToValue
}) =>
  <div className={scaleClass}>
    { range(0, scaleSteps).map(
      n =>
        <div className={scaleDivisionClass} key={n}>
          <div className={scaleValueClass}>
            {displayValue(normalToValue(n / scaleSteps))}
          </div>
        </div>
    )}
  </div>

export const RangeScale = Context.Consumer(Scale)
export default RangeScale
