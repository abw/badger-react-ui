import React from 'react'
import Context from './Context.js'

const Selection = ({
  className='range-selection',
}) =>
  <div className={className}/>

export const RangeSelection = Context.Consumer(Selection)
export default RangeSelection
