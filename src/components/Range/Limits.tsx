import Context from './Context'
import { classes } from '@/src/utils/classes'
import { RANGE_LIMITS_CLASS, RANGE_SCALE_SIZE, RANGE_SCALE_VALUE_CLASS } from './Constants'

export const RangeLimits = Context.Consumer(
  ({
    limitsClass=RANGE_LIMITS_CLASS,
    scaleValueClass=RANGE_SCALE_VALUE_CLASS,
    scaleSize=RANGE_SCALE_SIZE,
    displayValue,
    min,
    max,
    options
  }) => {
    const vcls = classes(scaleValueClass, scaleSize)
    return (
      <div className={limitsClass}>
        <div className={vcls}>
          {displayValue(min, options)}
        </div>
        <div className={vcls}>
          {displayValue(max, options)}
        </div>
      </div>
    )
  }
)

export default RangeLimits
