import React from 'react'
import Context from './Context.js'
import DefaultTrack from './Track.jsx'

const Slider = ({
  sliderClass='range-slider',
  Track=DefaultTrack,
}) =>
  <div className={sliderClass}>
    <Track/>
  </div>

export const RangeSlider = Context.Consumer(Slider)
export default RangeSlider
