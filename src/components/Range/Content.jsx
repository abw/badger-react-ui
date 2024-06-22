import React from 'react'
import Context from './Context.js'
import DefaultSlider from './Slider.jsx'
import DefaultOutput from './Output.jsx'
import { classes } from '@/src/utils/classes.js'
// import DefaultSelection from './Selection.jsx'
// import DefaultThumb from './Thumb.jsx'

const Content = ({
  className,
  rangeClass='range',
  Slider=DefaultSlider,
  Output=DefaultOutput,
  showOutput,
  min, max,
  value,
  percent,
  round,
}) =>
  <div
    className={classes(rangeClass, className)}
    style={{ '--pos': `${percent}%` }}
  >
    { Boolean(showOutput) &&
      <Output/>
    }
    <Slider/>
    {/* <Selection/> */}
    {/* <Thumb/> */}
    <p>
      {min} to {max} round:{round} - value:{value} ({percent}%)
    </p>
  </div>

export const RangeContent = Context.Consumer(Content)
export default RangeContent
