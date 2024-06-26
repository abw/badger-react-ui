import React from 'react'
import Context from './Context.js'
import { classes } from '@/src/utils/index.js'

const ThumbMin = ({
  className='range-thumb min',
  thumbDragMin,
  onMouseDownMin,
  onKeyDownMin
}) =>
  <div
    className={classes(className, { dragging: thumbDragMin })}
    onMouseDown={onMouseDownMin}
    onKeyDown={onKeyDownMin}
    tabIndex="0"
  />

export const RangeMinMaxThumbMin = Context.Consumer(ThumbMin)
export default RangeMinMaxThumbMin
