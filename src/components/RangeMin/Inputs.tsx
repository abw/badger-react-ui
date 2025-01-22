import Context from '../Range/Context'
import DefaultInputMin from '../Range/InputMin'
import { classes } from '@/src/utils/classes'
import { RANGE_ALIGN_CENTER, RANGE_INPUTS_CLASS } from '../Range/Constants'

export const RangeMinInputs = Context.Consumer(
  ({
    inputsClass=RANGE_INPUTS_CLASS,
    alignInput=RANGE_ALIGN_CENTER,
    alignInputs=alignInput,
    inputSize,
    inputsSize=inputSize,
    InputMin=DefaultInputMin,
  }) =>
    <div className={classes(inputsClass, alignInputs, inputsSize)}>
      <InputMin/>
    </div>
)

export default RangeMinInputs
