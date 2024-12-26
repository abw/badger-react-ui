import React from 'react'
import Context from './Context.js'
import DefaultThumbMin from './ThumbMin.jsx'
import DefaultThumbMax from './ThumbMax.jsx'

const Thumbs = ({
  thumbsClass='range-thumbs',
  ThumbMin=DefaultThumbMin,
  ThumbMax=DefaultThumbMax,
  thumbsRef,
}) =>
  <div
    className={thumbsClass}
    ref={thumbsRef}
  >
    <ThumbMin/>
    <ThumbMax/>
  </div>

export const RangeThumbs = Context.Consumer(Thumbs)
export default RangeThumbs
