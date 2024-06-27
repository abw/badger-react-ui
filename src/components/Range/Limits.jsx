import React from 'react'
import Context from './Context.js'
import DefaultInput from './Input.jsx'

const Limits = ({
  limitsClass='range-limits',
  scaleValueClass='range-scale-value',
  Input=DefaultInput,
  showInput,
  displayValue,
  min,
  max
}) =>
  <div className={limitsClass}>
    <div className={scaleValueClass}>
      {displayValue(min)}
    </div>
    { Boolean(showInput) &&
      <Input inLimits/>
    }
    <div className={scaleValueClass}>
      {displayValue(max)}
    </div>
  </div>

export const RangeLimits = Context.Consumer(Limits)
export default RangeLimits
