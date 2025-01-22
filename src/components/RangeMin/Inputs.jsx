import React from 'react'
import Context from '../Range/Context'
import DefaultInputMin from '../Range/InputMin'
import { classes } from '@/src/utils/classes'

const Inputs = ({
  inputsClass='range-inputs',
  alignInput='center',
  alignInputs=alignInput,
  inputSize,
  inputsSize=inputSize,
  InputMin=DefaultInputMin,
}) =>
  <div className={classes(inputsClass, alignInputs, inputsSize)}>
    <InputMin/>
  </div>

export const RangeMinInputs = Context.Consumer(Inputs)
export default RangeMinInputs
