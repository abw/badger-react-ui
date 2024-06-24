import React from 'react'
import Context from './Context.js'

const Selection = ({
  className='range-selection',
  // selectionRef,
  // noClick
}) =>
  <div
    className={className}
    // ref={selectionRef}
    // onClick={noClick}
  />

export const RangeSelection = Context.Consumer(Selection)
export default RangeSelection
