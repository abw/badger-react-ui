import Context from '../Range/Context'
import DefaultValueMax from '../Range/ValueMax'
import { RANGE_VALUES_CLASS } from '../Range/Constants'

export const RangeMaxValues = Context.Consumer(
  ({
    valuesClass=RANGE_VALUES_CLASS,
    ValueMax=DefaultValueMax,
  }) =>
    <div className={valuesClass}>
      <ValueMax/>
    </div>
)

export default RangeMaxValues
