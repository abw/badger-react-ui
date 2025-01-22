import Context from './Context'
import DefaultValues from './Values'
import { RANGE_OUTPUT_CLASS } from './Constants'

export const RangeOutput = Context.Consumer(
  ({
    outputClass=RANGE_OUTPUT_CLASS,
    Values=DefaultValues,
  }) =>
    <div className={outputClass}>
      <Values/>
    </div>
)

export default RangeOutput
