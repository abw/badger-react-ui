import Context from './Context'
import { classes } from '@/src/utils/index'
import { RANGE_MIN_CLASS, RANGE_THUMB_CLASS } from './Constants'

export const RangeThumbMin = Context.Consumer(
  ({
    thumbClass=RANGE_THUMB_CLASS,
    minClass=RANGE_MIN_CLASS,
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
      tabIndex={0}
    />
)

export default RangeThumbMin
