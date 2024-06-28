import React from 'react'
import Context from './Context.js'

const Limits = ({
  limitsClass='range-limits',
  scaleValueClass='range-scale-value',
  displayValue,
  min,
  max
}) =>
  <div className={limitsClass}>
    <div className={scaleValueClass}>
      {displayValue(min)}
    </div>
    <div className={scaleValueClass}>
      {displayValue(max)}
    </div>
  </div>

export const RangeLimits = Context.Consumer(Limits)
export default RangeLimits
