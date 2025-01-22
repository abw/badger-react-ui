import React from 'react'
import Context from '../Range/Context'
import DefaultValueMax from '../Range/ValueMax'

const Values = ({
  valuesClass='range-values',
  ValueMax=DefaultValueMax,
}) =>
  <div className={valuesClass}>
    <ValueMax/>
  </div>

export const RangeMaxValues = Context.Consumer(Values)
export default RangeMaxValues
