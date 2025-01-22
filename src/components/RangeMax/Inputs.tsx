import Context from '../Range/Context'
import DefaultInputMax from '../Range/InputMax'
import { classes } from '@/src/utils/classes'
import { RANGE_ALIGN_CENTER, RANGE_INPUTS_CLASS } from '../Range/Constants'

export const RangeMaxInputs = Context.Consumer(
  ({
    inputsClass=RANGE_INPUTS_CLASS,
    alignInput=RANGE_ALIGN_CENTER,
    alignInputs=alignInput,
    inputSize,
    inputsSize=inputSize,
    InputMax=DefaultInputMax,
  }) =>
    <div className={classes(inputsClass, alignInputs, inputsSize)}>
      <InputMax/>
    </div>
)

export default RangeMaxInputs
