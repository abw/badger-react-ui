import React from 'react'
import Context from '../Range/Context.js'
import DefaultInputMax from '../Range/InputMax.jsx'
import { classes } from '@/src/utils/classes'

const Inputs = ({
  inputsClass='range-inputs',
  alignInput='center',
  alignInputs=alignInput,
  inputSize,
  inputsSize=inputSize,
  InputMax=DefaultInputMax,
}) =>
  <div className={classes(inputsClass, alignInputs, inputsSize)}>
    <InputMax/>
  </div>

export const RangeMaxInputs = Context.Consumer(Inputs)
export default RangeMaxInputs
