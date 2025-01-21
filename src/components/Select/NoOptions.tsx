import Context from './Context'
import { SELECT_NO_OPTIONS, SELECT_NO_OPTIONS_CLASS } from './Constants'

export const SelectNoOptions = Context.Consumer(
  ({
    noOptions=SELECT_NO_OPTIONS,
    noOptionsClass=SELECT_NO_OPTIONS_CLASS
  }) =>
    <div className={noOptionsClass}>
      {noOptions}
    </div>
)

export default SelectNoOptions
