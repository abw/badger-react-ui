import React from 'react'
import Context from './Context.js'
import DefaultValueMin from './ValueMin.jsx'
import DefaultValueMax from './ValueMax.jsx'

const Values = ({
  valuesClass='range-values',
  ValueMin=DefaultValueMin,
  ValueMax=DefaultValueMax,
}) =>
  <div className={valuesClass}>
    <ValueMin/>
    <ValueMax/>
  </div>

export const RangeMinMaxValues = Context.Consumer(Values)
export default RangeMinMaxValues
