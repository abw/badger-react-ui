import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes'

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
  displayValue,
  options
}) =>
  <div className={classes(valueClass, minClass, alignMinValue)}>
    {displayValue(minValue, options)}
  </div>

export const RangeValueMin = Context.Consumer(ValueMin)
export default RangeValueMin
