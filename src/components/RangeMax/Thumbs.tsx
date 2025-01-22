import Context from '../Range/Context'
import DefaultThumbMax from '../Range/ThumbMax'
import { RANGE_THUMBS_CLASS } from '../Range/Constants'

export const RangeMaxThumbs = Context.Consumer(
  ({
    thumbsClass=RANGE_THUMBS_CLASS,
    ThumbMax=DefaultThumbMax,
    thumbsRef,
  }) =>
    <div
      className={thumbsClass}
      ref={thumbsRef}
    >
      <ThumbMax/>
    </div>
)

export default RangeMaxThumbs
