import Context from './Context'
import { classes } from '@/src/utils/classes'
import { RangeAligner } from './types'

const alignment: RangeAligner = {
  space: 'left'
}

export const RangeValueMin = Context.Consumer(
  ({
    valueClass='range-value',
    minClass='min',
    alignValue='thumb',
    alignValues=alignValue,
    alignMinValue=alignment[alignValues] || alignValues,
    minValue,
    displayValue,
    options
  }) =>
    <div className={classes(valueClass, minClass, alignMinValue)}>
      {displayValue(minValue, options)}
    </div>
)

export default RangeValueMin
