import React from 'react'
import Context from './Context.js'

const Selection = ({
  selectionClass='range-selection',
}) =>
  <div className={selectionClass}/>

export const RangeSelection = Context.Consumer(Selection)
export default RangeSelection
