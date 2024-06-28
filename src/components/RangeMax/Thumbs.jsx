import React from 'react'
import Context from '../Range/Context.js'
import DefaultThumbMax from '../Range/ThumbMax.jsx'

const Thumbs = ({
  thumbsClass='range-thumbs',
  Thumb=DefaultThumbMax,
  thumbsRef,
}) =>
  <div
    className={thumbsClass}
    ref={thumbsRef}
  >
    <Thumb/>
  </div>

export const RangeMaxThumbs = Context.Consumer(Thumbs)
export default RangeMaxThumbs
