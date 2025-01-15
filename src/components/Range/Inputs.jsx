import React from 'react'
import Context from './Context.js'
import DefaultInputMin from './InputMin.jsx'
import DefaultInputMax from './InputMax.jsx'
import { classes } from '@/src/utils/classes'

const Inputs = ({
  inputsClass='range-inputs',
  alignInput='space',
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

export const RangeInputs = Context.Consumer(Inputs)
export default RangeInputs
