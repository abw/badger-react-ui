import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes.js'

const alignment = {
  space: 'right'
}

const ValueMax = ({
  valueClass='range-value',
  maxClass='max',
  alignValue='thumb',
  alignValues=alignValue,
  alignMaxValue=alignment[alignValues] || alignValues,
  maxValue,
  displayValue
}) =>
  <div className={classes(valueClass, maxClass, alignMaxValue)}>
    {displayValue(maxValue)}
  </div>

export const RangeMinMaxValueMax = Context.Consumer(ValueMax)
export default RangeMinMaxValueMax
