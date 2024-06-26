import React from 'react'
import Context from './Context.js'
import DefaultSelection from './Selection.jsx'
import DefaultThumbs from './Thumbs.jsx'

const Track = ({
  trackClass='range-track',
  Selection=DefaultSelection,
  Thumbs=DefaultThumbs,
  onClick,
  trackRef
}) =>
  <div className={trackClass} ref={trackRef} onClick={onClick}>
    <Selection/>
    <Thumbs/>
  </div>

export const RangeMinMaxTrack = Context.Consumer(Track)
export default RangeMinMaxTrack
