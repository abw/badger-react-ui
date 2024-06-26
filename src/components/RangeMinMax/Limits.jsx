import React from 'react'
import Context from './Context.js'

const Limits = ({
  limitsClass='range-limits',
  scaleValueClass='range-scale-value',
  min,
  max
}) =>
  <div className={limitsClass}>
    <div className={scaleValueClass}>
      {min}
    </div>
    <div className={scaleValueClass}>
      {max}
    </div>
  </div>

export const RangeMinMaxLimits = Context.Consumer(Limits)
export default RangeMinMaxLimits
