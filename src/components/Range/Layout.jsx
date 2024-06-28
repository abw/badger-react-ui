import React from 'react'
import Context from './Context.js'
import DefaultSlider from './Slider.jsx'
import DefaultInputs from './Inputs.jsx'
import DefaultOutput from './Output.jsx'
import DefaultLimits from './Limits.jsx'
import DefaultDebug from './Debug.jsx'

const Layout = ({
  Slider=DefaultSlider,
  Inputs=DefaultInputs,
  Output=DefaultOutput,
  Limits=DefaultLimits,
  Debug=DefaultDebug,
  debug,
  showInput,
  showInputs=showInput,
  showValue,
  showValues=showValue,
  showScale,
  showLimits,
}) =>
  <>
    { Boolean(showValues) &&
      <Output/>
    }
    <Slider/>
    { (showLimits && ! showScale) &&
      <Limits/>
    }
    { showInputs &&
      <Inputs/>
    }
    { Boolean(debug) &&
      <Debug/>
    }
  </>

export const RangeLayout = Context.Consumer(Layout)
export default RangeLayout
