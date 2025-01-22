import Context from './Context'
import DefaultInputMin from './InputMin'
import DefaultInputMax from './InputMax'
import { classes } from '@/src/utils/classes'
import { RANGE_ALIGN_SPACE, RANGE_INPUTS_CLASS } from './Constants'

export const RangeInputs = Context.Consumer(
  ({
    inputsClass=RANGE_INPUTS_CLASS,
    alignInput=RANGE_ALIGN_SPACE,
    alignInputs=alignInput,
    inputSize,
    inputsSize=inputSize,
    InputMin=DefaultInputMin,
    InputMax=DefaultInputMax,
  }) =>
    <div className={classes(inputsClass, alignInputs, inputsSize)}>
      <InputMin/>
      <InputMax/>
    </div>
)

export default RangeInputs
