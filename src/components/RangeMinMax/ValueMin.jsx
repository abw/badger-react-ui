import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes.js'

const ValueMin = ({
  valueClass='range-value',
  minClass='min',
  minValueLocation='thumb',
  minValue,
  displayValue
}) =>
  <div className={classes(valueClass, minClass, minValueLocation)}>
    {displayValue(minValue)}
  </div>

export const RangeMinMaxValueMin = Context.Consumer(ValueMin)
export default RangeMinMaxValueMin
