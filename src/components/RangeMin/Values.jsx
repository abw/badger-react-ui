import React from 'react'
import Context from '../Range/Context'
import DefaultValueMin from '../Range/ValueMin'

const Values = ({
  valuesClass='range-values',
  ValueMin=DefaultValueMin,
}) =>
  <div className={valuesClass}>
    <ValueMin/>
  </div>

export const RangeMinValues = Context.Consumer(Values)
export default RangeMinValues
