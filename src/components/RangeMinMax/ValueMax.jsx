import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes.js'

const ValueMax = ({
  valueClass='range-value',
  maxClass='max',
  maxValueLocation='thumb',
  maxValue,
  displayValue
}) =>
  <div className={classes(valueClass, maxClass, maxValueLocation)}>
    {displayValue(maxValue)}
  </div>

export const RangeMinMaxValueMax = Context.Consumer(ValueMax)
export default RangeMinMaxValueMax
