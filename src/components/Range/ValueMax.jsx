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
  displayValue,
  options
}) =>
  <div className={classes(valueClass, maxClass, alignMaxValue)}>
    {displayValue(maxValue, options)}
  </div>

export const RangeValueMax = Context.Consumer(ValueMax)
export default RangeValueMax
