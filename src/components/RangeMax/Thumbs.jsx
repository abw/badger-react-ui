import React from 'react'
import Context from '../RangeMinMax/Context.js'
import DefaultThumbMax from '../RangeMinMax/ThumbMax.jsx'

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

export const RangeMaxThumb = Context.Consumer(Thumbs)
export default RangeMaxThumb
