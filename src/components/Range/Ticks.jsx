import React from 'react'
import Context from './Context.js'
import { range } from '@abw/badger-utils'

const Ticks = ({
  ticksClass='range-ticks',
  tickClass='range-tick',
  scaleValueClass='range-scale-value',
  tickSteps,
  showScale,
  displayValue,
  normalToValue,
}) =>
  <div
    className={ticksClass}
  >
    { range(0, tickSteps).map(
      n =>
        <div className={tickClass} key={n}>
          { Boolean(showScale) &&
            <div className={scaleValueClass}>
              {displayValue(normalToValue(n / tickSteps))}
            </div>
          }
        </div>
    )}
  </div>

export const RangeTicks = Context.Consumer(Ticks)
export default RangeTicks
