import React from 'react'
import Context from './Context.js'

const Selection = ({
  className='range-selection',
}) =>
  <div className={className}/>

export const RangeMinMaxSelection = Context.Consumer(Selection)
export default RangeMinMaxSelection
