import Context from './Context'
import DefaultThumbMin from './ThumbMin'
import DefaultThumbMax from './ThumbMax'
import { RANGE_THUMBS_CLASS } from './Constants'

export const RangeThumbs = Context.Consumer(
  ({
    thumbsClass=RANGE_THUMBS_CLASS,
    ThumbMin=DefaultThumbMin,
    ThumbMax=DefaultThumbMax,
    thumbsRef,
  }) =>
    <div
      className={thumbsClass}
      ref={thumbsRef}
    >
      <ThumbMin/>
      <ThumbMax/>
    </div>
)

export default RangeThumbs
