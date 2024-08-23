import React from 'react'
import Context from './Context.js'
import { range } from '@abw/badger-utils'
import { classes } from '@/src/utils/classes.js'

const Ticks = ({
  ticksClass='range-ticks',
  tickClass='range-tick',
  scaleValueClass='range-scale-value',
  scaleSize='smaller',
  tickSteps,
  showScale,
  displayValue,
  normalToValue,
  values
}) => {
  const vcls = classes(scaleValueClass, scaleSize)
  return (
    <div
      className={ticksClass}
    >
      { range(0, tickSteps).map(
        n =>
          <div className={tickClass} key={n}>
            { Boolean(showScale) &&
              <div className={vcls}>
                {displayValue(normalToValue(n / tickSteps), values)}
              </div>
            }
          </div>
      )}
    </div>
  )
}

export const RangeTicks = Context.Consumer(Ticks)
export default RangeTicks
