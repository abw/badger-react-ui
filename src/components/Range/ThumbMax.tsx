import Context from './Context'
import { classes } from '@/src/utils/index'
import { RANGE_MAX_CLASS, RANGE_THUMB_CLASS } from './Constants'

export const RangeThumbMax = Context.Consumer(
  ({
    thumbClass=RANGE_THUMB_CLASS,
    maxClass=RANGE_MAX_CLASS,
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
      tabIndex={0}
    />
)

export default RangeThumbMax
