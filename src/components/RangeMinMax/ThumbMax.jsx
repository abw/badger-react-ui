import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const ThumbMax = ({
  className='range-thumb max',
  thumbDragMax,
  onMouseDownMax,
  onKeyDownMax
}) =>
  <div
    className={classes(className, { dragging: thumbDragMax })}
    onMouseDown={onMouseDownMax}
    onKeyDown={onKeyDownMax}
    tabIndex="0"
  />

export const RangeMinMaxThumbMax = Context.Consumer(ThumbMax)
export default RangeMinMaxThumbMax
