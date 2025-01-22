import Context from './Context'
import { RANGE_SELECTION_CLASS } from './Constants'

export const RangeSelection = Context.Consumer(
  ({
    selectionClass=RANGE_SELECTION_CLASS,
  }) =>
    <div className={selectionClass}/>
)

export default RangeSelection
