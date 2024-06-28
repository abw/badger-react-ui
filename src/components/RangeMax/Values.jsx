import React from 'react'
import Context from '../RangeMinMax/Context.js'
import DefaultValueMax from '../RangeMinMax/ValueMax.jsx'

const Values = ({
  valuesClass='range-values',
  ValueMax=DefaultValueMax,
}) =>
  <div className={valuesClass}>
    <ValueMax/>
  </div>

export const RangeMaxValues = Context.Consumer(Values)
export default RangeMaxValues
