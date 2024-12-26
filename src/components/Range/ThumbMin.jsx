import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const ThumbMin = ({
  thumbClass='range-thumb',
  minClass='min',
  dragging,
  onDragMin,
  onKeyDownMin
}) =>
  <div
    className={
      classes(
        thumbClass,
        minClass,
        { dragging: dragging?.control === 'min' }
      )
    }
    onPointerDown={onDragMin}
    onKeyDown={onKeyDownMin}
    tabIndex="0"
  />

export const RangeThumbMin = Context.Consumer(ThumbMin)
export default RangeThumbMin
