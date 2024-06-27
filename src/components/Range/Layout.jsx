import React from 'react'
import Context from './Context.js'
import DefaultSlider from './Slider.jsx'
import DefaultInput from './Input.jsx'
import DefaultOutput from './Output.jsx'
import DefaultLimits from './Limits.jsx'
import DefaultDebug from './Debug.jsx'

const Layout = ({
  Slider=DefaultSlider,
  Input=DefaultInput,
  Output=DefaultOutput,
  Limits=DefaultLimits,
  Debug=DefaultDebug,
  debug,
  showInput,
  showInputs=showInput,
  showValue,
  showScale,
  showLimits,
}) =>
  <>
    { Boolean(showValue) &&
      <Output/>
    }
    <Slider/>
    { (showLimits && ! showScale) &&
      <Limits/>
    }
    { (showInputs && ! showLimits) &&
      <Input/>
    }
    { Boolean(debug) &&
      <Debug/>
    }
  </>

export const RangeLayout = Context.Consumer(Layout)
export default RangeLayout
