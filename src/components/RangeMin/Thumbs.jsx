import React from 'react'
import Context from '../RangeMinMax/Context.js'
import DefaultThumbMin from '../RangeMinMax/ThumbMin.jsx'

const Thumbs = ({
  thumbsClass='range-thumbs',
  Thumb=DefaultThumbMin,
  thumbsRef,
}) =>
  <div
    className={thumbsClass}
    ref={thumbsRef}
  >
    <Thumb/>
  </div>

export const RangeMinThumbs = Context.Consumer(Thumbs)
export default RangeMinThumbs
