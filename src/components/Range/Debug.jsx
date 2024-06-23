import React from 'react'
import Context from './Context.js'

const Debug = ({
  min, max,
  value,
  percent,
  step,
}) =>
  <div>
    {min} to {max} step:{step} - value:{value} ({percent}%)
  </div>

export const RangeDebug = Context.Consumer(Debug)
export default RangeDebug
