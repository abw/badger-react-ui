import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/classes.js'

const locations = {
  limits: 'left'
}

const ValueMin = ({
  valueClass='range-value',
  minClass='min',
  valueLocation='thumb',
  valueLocations=valueLocation,
  minValueLocation=locations[valueLocations] || valueLocations,
  minValue,
  displayValue
}) =>
  <div className={classes(valueClass, minClass, minValueLocation)}>
    {displayValue(minValue)}
  </div>

export const RangeMinMaxValueMin = Context.Consumer(ValueMin)
export default RangeMinMaxValueMin
