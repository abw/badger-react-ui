import React from 'react'
import Context from './Context.js'

const Debug = ({
  min, max,
  value,
  percent,
  step,
  steps
}) =>
  <div>
    {min} to {max} step:{step} steps:{steps} - value:{value} ({percent}%)
  </div>

export const RangeMinMaxDebug = Context.Consumer(Debug)
export default RangeMinMaxDebug
