import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes'

const Limits = ({
  limitsClass='range-limits',
  scaleValueClass='range-scale-value',
  scaleSize='smaller',
  displayValue,
  min,
  max,
  options
}) => {
  const vcls = classes(scaleValueClass, scaleSize)
  return (
    <div className={limitsClass}>
      <div className={vcls}>
        {displayValue(min, options)}
      </div>
      <div className={vcls}>
        {displayValue(max, options)}
      </div>
    </div>
  )
}

export const RangeLimits = Context.Consumer(Limits)
export default RangeLimits
