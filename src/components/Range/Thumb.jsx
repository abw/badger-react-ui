import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const Thumb = ({
  thumbClass='range-thumb',
  // thumbRef,
  thumbDrag,
  onMouseDown,
  onKeyDown
}) =>
  <div
    className={classes(thumbClass, { dragging: thumbDrag })}
    // ref={thumbRef}
    onMouseDown={onMouseDown}
    onKeyDown={onKeyDown}
    tabIndex="0"
  />

export const RangeThumb = Context.Consumer(Thumb)
export default RangeThumb
