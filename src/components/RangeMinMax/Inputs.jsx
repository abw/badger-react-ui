import React from 'react'
import Context from './Context.js'
import DefaultInputMin from './InputMin.jsx'
import DefaultInputMax from './InputMax.jsx'

const Inputs = ({
  inputsClass='range-inputs',
  InputMin=DefaultInputMin,
  InputMax=DefaultInputMax,
}) =>
  <div className={inputsClass}>
    <InputMin/>
    <InputMax/>
  </div>

export const RangeMinMaxInputs = Context.Consumer(Inputs)
export default RangeMinMaxInputs
