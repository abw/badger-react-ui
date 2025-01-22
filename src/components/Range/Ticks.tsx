import Context from './Context'
import { range } from '@abw/badger-utils'
import { classes } from '@/src/utils/classes'
import { RANGE_SCALE_SIZE, RANGE_SCALE_VALUE_CLASS, RANGE_TICKS_CLASS } from './Constants'

export const RangeTicks = Context.Consumer(
  ({
    ticksClass=RANGE_TICKS_CLASS,
    tickClass=RANGE_TICKS_CLASS,
    scaleValueClass=RANGE_SCALE_VALUE_CLASS,
    scaleSize=RANGE_SCALE_SIZE,
    tickSteps,
    showScale,
    displayValue,
    normalToValue,
    options
  }) => {
    const vcls = classes(scaleValueClass, scaleSize)
    return (
      <div
        className={ticksClass}
      >
        { range(0, tickSteps as number).map(
          n =>
            <div className={tickClass} key={n}>
              { Boolean(showScale) &&
                <div className={vcls}>
                  {displayValue(normalToValue(n / (tickSteps as number)), options)}
                </div>
              }
            </div>
        )}
      </div>
    )
  }
)

export default RangeTicks
