import React from 'react'
import Context from './Context.js'
import DefaultSlider from './Slider.jsx'
import DefaultInput from './Input.jsx'
import DefaultOutput from './Output.jsx'
import DefaultLimits from './Limits.jsx'
import DefaultDebug from './Debug.jsx'
import { classes } from '@/src/utils/classes.js'
// import DefaultSelection from './Selection.jsx'
// import DefaultThumb from './Thumb.jsx'

const Content = ({
  className,
  rangeClass='range',
  Slider=DefaultSlider,
  Input=DefaultInput,
  Output=DefaultOutput,
  Limits=DefaultLimits,
  Debug=DefaultDebug,
  debug,
  showInput,
  showOutput, // old
  showValue,  // new
  showLimits,
  percent,
}) =>
  <div
    className={classes(rangeClass, className)}
    style={{ '--percent': `${percent}%` }}
  >
    { (showOutput || showValue) &&
      <Output/>
    }
    <Slider/>
    { Boolean(showLimits) &&
      <Limits/>
    }
    { (showInput && ! showLimits) &&
      <Input/>
    }
    { Boolean(debug) &&
      <Debug/>
    }
  </div>

export const RangeContent = Context.Consumer(Content)
export default RangeContent
