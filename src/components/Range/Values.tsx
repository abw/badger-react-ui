import Context from './Context'
import DefaultValueMin from './ValueMin.js'
import DefaultValueMax from './ValueMax.js'
import { classes } from '@/src/utils/classes'
import { RANGE_VALUE_SIZE, RANGE_VALUES_CLASS } from './Constants'

export const RangeValues = Context.Consumer(
  ({
    valuesClass=RANGE_VALUES_CLASS,
    valueSize=RANGE_VALUE_SIZE,
    valuesSize=valueSize,
    ValueMin=DefaultValueMin,
    ValueMax=DefaultValueMax,
  }) =>
    <div className={classes(valuesClass, valuesSize)}>
      <ValueMin/>
      <ValueMax/>
    </div>
)

export default RangeValues
