import React from 'react'
import Context from '../RangeMinMax/Context.js'
import DefaultInputMax from '../RangeMinMax/InputMax.jsx'
import { classes } from '@/src/utils/classes.js'

const Inputs = ({
  inputsClass='range-inputs',
  inputLocation='right',
  InputMax=DefaultInputMax,
}) =>
  <div className={classes(inputsClass, inputLocation)}>
    <InputMax/>
  </div>

export const RangeMaxInputs = Context.Consumer(Inputs)
export default RangeMaxInputs
