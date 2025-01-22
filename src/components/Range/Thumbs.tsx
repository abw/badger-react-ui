import Context from './Context'
import DefaultThumbMin from './ThumbMin'
import DefaultThumbMax from './ThumbMax'

export const RangeThumbs = Context.Consumer(
  ({
    thumbsClass='range-thumbs',
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
