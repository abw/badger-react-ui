import React from 'react'
import Context from './Context.js'
import DefaultSlider from './Slider.jsx'
import DefaultInput from './Input.jsx'
import DefaultOutput from './Output.jsx'
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
  Debug=DefaultDebug,
  debug,
  showInput,
  showOutput,
  percent,
}) =>
  <div
    className={classes(rangeClass, className)}
    style={{ '--percent': `${percent}%` }}
  >
    { Boolean(showOutput) &&
      <Output/>
    }
    <Slider/>
    { Boolean(showInput) &&
      <Input/>
    }
    { Boolean(debug) &&
      <Debug/>
    }
  </div>

export const RangeContent = Context.Consumer(Content)
export default RangeContent
