import React from 'react'
import Context from '../Range/Context'
import DefaultThumbMin from '../Range/ThumbMin'

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
