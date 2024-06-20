import React from 'react'
import Context from './Context.js'
import DefaultThumb from './Thumb.jsx'

const Thumbs = ({
  thumbsClass='thumbs',
  Thumb=DefaultThumb,
  thumbsRef,
}) =>
  <div
    className={thumbsClass}
    ref={thumbsRef}
  >
    <Thumb/>
  </div>

export const RangeThumb = Context.Consumer(Thumbs)
export default RangeThumb
