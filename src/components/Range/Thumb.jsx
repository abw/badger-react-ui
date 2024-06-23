import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const Thumb = ({
  className='range-thumb',
  thumbRef,
  thumbDrag,
  onMouseDown,
  onKeyDown
}) =>
  <div
    className={classes(className, { dragging: thumbDrag })}
    ref={thumbRef}
    onMouseDown={onMouseDown}
    onKeyDown={onKeyDown}
    tabIndex="0"
  />

export const RangeThumb = Context.Consumer(Thumb)
export default RangeThumb
