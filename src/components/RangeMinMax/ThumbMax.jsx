import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const ThumbMax = ({
  thumbClass='range-thumb',
  maxClass='max',
  draggingMax,
  onDragMax,
  onKeyDownMax
}) =>
  <div
    className={classes(thumbClass, maxClass, { dragging: draggingMax })}
    onPointerDown={onDragMax}
    onKeyDown={onKeyDownMax}
    tabIndex="0"
  />

export const RangeMinMaxThumbMax = Context.Consumer(ThumbMax)
export default RangeMinMaxThumbMax
