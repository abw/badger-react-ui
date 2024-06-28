import React from 'react'
import Context from './Context.js'
import DefaultValue from './Value.jsx'

const Output = ({
  outputClass='range-output',
  Value=DefaultValue,
}) =>
  <div className={outputClass}>
    <Value/>
  </div>

export const RangeOutput = Context.Consumer(Output)
export default RangeOutput
