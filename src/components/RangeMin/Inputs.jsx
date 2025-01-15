import React from 'react'
import Context from '../Range/Context.js'
import DefaultInputMin from '../Range/InputMin.jsx'
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
