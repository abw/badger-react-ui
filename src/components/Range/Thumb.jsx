import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const Thumb = ({
  className='thumb',
  thumbRef,
  thumbDrag,
  onMouseDown,
}) =>
  <div
    className={classes(className, { dragging: thumbDrag })}
    ref={thumbRef}
    onMouseDown={onMouseDown}
  />

export const RangeThumb = Context.Consumer(Thumb)
export default RangeThumb
