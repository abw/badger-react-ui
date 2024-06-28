import React from 'react'
import Context from '../RangeMinMax/Context.js'
import DefaultValueMin from '../RangeMinMax/ValueMin.jsx'

const Values = ({
  valuesClass='range-values',
  ValueMin=DefaultValueMin,
}) =>
  <div className={valuesClass}>
    <ValueMin/>
  </div>

export const RangeMinValues = Context.Consumer(Values)
export default RangeMinValues
