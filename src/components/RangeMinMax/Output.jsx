import React from 'react'
import Context from './Context.js'
import DefaultValues from './Values.jsx'

const Output = ({
  outputClass='range-output',
  Values=DefaultValues,
}) =>
  <div className={outputClass}>
    <Values/>
  </div>

export const RangeMinMaxOutput = Context.Consumer(Output)
export default RangeMinMaxOutput
