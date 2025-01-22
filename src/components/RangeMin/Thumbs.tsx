import Context from '../Range/Context'
import DefaultThumbMin from '../Range/ThumbMin'
import { RANGE_THUMBS_CLASS } from '../Range/Constants'

export const RangeMinThumbs = Context.Consumer(
  ({
    thumbsClass=RANGE_THUMBS_CLASS,
    ThumbMin=DefaultThumbMin,
    thumbsRef,
  }) =>
    <div
      className={thumbsClass}
      ref={thumbsRef}
    >
      <ThumbMin/>
    </div>
)

export default RangeMinThumbs
