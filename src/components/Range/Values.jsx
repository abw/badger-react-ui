import React from 'react'
import Context from './Context.js'
import DefaultValueMin from './ValueMin.jsx'
import DefaultValueMax from './ValueMax.jsx'
import { classes } from '@/src/utils/classes'

const Values = ({
  valuesClass='range-values',
  ValueMin=DefaultValueMin,
  ValueMax=DefaultValueMax,
  valueSize='small',
  valuesSize=valueSize,
}) =>
  <div className={classes(valuesClass, valuesSize)}>
    <ValueMin/>
    <ValueMax/>
  </div>

export const RangeValues = Context.Consumer(Values)
export default RangeValues
