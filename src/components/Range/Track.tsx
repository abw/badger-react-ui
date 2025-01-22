import Context from './Context'
import DefaultSelection from './Selection'
import DefaultThumbs from './Thumbs'
import { RANGE_TRACK_CLASS } from './Constants'

export const RangeTrack = Context.Consumer(
  ({
    trackClass=RANGE_TRACK_CLASS,
    Selection=DefaultSelection,
    Thumbs=DefaultThumbs,
    onClick,
    trackRef
  }) =>
    <div className={trackClass} ref={trackRef} onClick={onClick}>
      <Selection/>
      <Thumbs/>
    </div>
)

export default RangeTrack
