import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const ThumbMax = ({
  thumbClass='range-thumb',
  maxClass='max',
  dragging,
  onDragMax,
  onKeyDownMax
}) =>
  <div
    className={
      classes(
        thumbClass,
        maxClass,
        { dragging: dragging?.control === 'max' }
      )
    }
    onPointerDown={onDragMax}
    onKeyDown={onKeyDownMax}
    tabIndex="0"
  />

export const RangeThumbMax = Context.Consumer(ThumbMax)
export default RangeThumbMax
