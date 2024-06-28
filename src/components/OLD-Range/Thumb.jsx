import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const Thumb = ({
  thumbClass='range-thumb',
  thumbDrag,
  onDrag,
  onKeyDown
}) =>
  <div
    className={classes(thumbClass, { dragging: thumbDrag })}
    onPointerDown={onDrag}
    onKeyDown={onKeyDown}
    tabIndex="0"
  />

export const RangeThumb = Context.Consumer(Thumb)
export default RangeThumb
