import React from 'react'
import Context from './Context.js'
import DefaultTrack from './Track.jsx'
import DefaultTicks from './Ticks.jsx'

const Slider = ({
  sliderClass='range-slider',
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

export const RangeMinMaxSlider = Context.Consumer(Slider)
export default RangeMinMaxSlider
