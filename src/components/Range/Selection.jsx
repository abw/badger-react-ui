import React from 'react'
import Context from './Context.js'

const Selection = ({
  className='selection',
  selectionRef
}) =>
  <div className={className} ref={selectionRef}/>

export const RangeSelection = Context.Consumer(Selection)
export default RangeSelection
