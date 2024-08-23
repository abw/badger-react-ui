import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes.js'

const Limits = ({
  limitsClass='range-limits',
  scaleValueClass='range-scale-value',
  scaleSize='smaller',
  displayValue,
  min,
  max,
  values
}) => {
  const vcls = classes(scaleValueClass, scaleSize)
  return (
    <div className={limitsClass}>
      <div className={vcls}>
        {displayValue(min, values)}
      </div>
      <div className={vcls}>
        {displayValue(max, values)}
      </div>
    </div>
  )
}

export const RangeLimits = Context.Consumer(Limits)
export default RangeLimits
