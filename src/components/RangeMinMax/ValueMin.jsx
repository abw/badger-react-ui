import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes.js'

const alignment = {
  space: 'left'
}

const ValueMin = ({
  valueClass='range-value',
  minClass='min',
  alignValue='thumb',
  alignValues=alignValue,
  alignMinValue=alignment[alignValues] || alignValues,
  minValue,
  displayValue
}) =>
  <div className={classes(valueClass, minClass, alignMinValue)}>
    {displayValue(minValue)}
  </div>

export const RangeMinMaxValueMin = Context.Consumer(ValueMin)
export default RangeMinMaxValueMin
