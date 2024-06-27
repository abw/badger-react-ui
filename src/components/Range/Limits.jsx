import React from 'react'
import Context from './Context.js'
import DefaultInput from './Input.jsx'

const Limits = ({
  limitsClass='range-limits',
  scaleValueClass='range-scale-value',
  Input=DefaultInput,
  showInput,
  min,
  max
}) =>
  <div className={limitsClass}>
    <div className={scaleValueClass}>
      {min}
    </div>
    { Boolean(showInput) &&
      <Input inLimits/>
    }
    <div className={scaleValueClass}>
      {max}
    </div>
  </div>

export const RangeLimits = Context.Consumer(Limits)
export default RangeLimits