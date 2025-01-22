import Context from '../Range/Context'
import DefaultValueMin from '../Range/ValueMin'
import { RANGE_VALUES_CLASS } from '../Range/Constants'

export const RangeMinValues = Context.Consumer(
  ({
    valuesClass=RANGE_VALUES_CLASS,
    ValueMin=DefaultValueMin,
  }) =>
    <div className={valuesClass}>
      <ValueMin/>
    </div>
)

export default RangeMinValues
