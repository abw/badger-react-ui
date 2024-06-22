import React from 'react'
import Context from './Context.js'
import DefaultSelection from './Selection.jsx'
import DefaultThumbs from './Thumbs.jsx'

const Track = ({
  trackClass='range-track',
  Selection=DefaultSelection,
  Thumbs=DefaultThumbs,
  trackRef
}) =>
  <div className={trackClass} ref={trackRef}>
    <Selection/>
    <Thumbs/>
  </div>

export const RangeTrack = Context.Consumer(Track)
export default RangeTrack
