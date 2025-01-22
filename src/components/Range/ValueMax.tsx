import { RANGE_ALIGN_THUMB, RANGE_MAX_CLASS, RANGE_VALUE_CLASS } from './Constants'
import Context from './Context'
import { classes } from '@/src/utils/classes'
import { RangeAligner } from './types'

const alignment: RangeAligner = {
  space: 'right'
}

export const RangeValueMax = Context.Consumer(
  ({
    valueClass=RANGE_VALUE_CLASS,
    maxClass=RANGE_MAX_CLASS,
    alignValue=RANGE_ALIGN_THUMB,
    alignValues=alignValue,
    alignMaxValue=alignment[alignValues] || alignValues,
    maxValue,
    displayValue,
    options
  }) =>
    <div className={classes(valueClass, maxClass, alignMaxValue)}>
      {displayValue(maxValue, options)}
    </div>
)

export default RangeValueMax
