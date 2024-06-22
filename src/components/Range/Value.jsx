import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes.js'

const Value = ({
  valueClass='range-value',
  valueLocation='thumb',
  value
}) =>
  <div className={classes(valueClass, valueLocation)}>
    {value}
  </div>

export const RangeValue = Context.Consumer(Value)
export default RangeValue
