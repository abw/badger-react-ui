import Context from './Context.js'
import DefaultTrack from './Track.js'
import DefaultTicks from './Ticks.js'
import { RANGE_SLIDER_CLASS } from './Constants.js'

export const RangeSlider = Context.Consumer(
  ({
    sliderClass=RANGE_SLIDER_CLASS,
    Track=DefaultTrack,
    Ticks=DefaultTicks,
    steps,
    showTicks
  }) =>
    <div className={sliderClass}>
      { steps && showTicks &&
        <Ticks/>
      }
      <Track/>
    </div>
)

export default RangeSlider
