import Context from './Context'
import DefaultSlider from './Slider'
import DefaultInputs from './Inputs.js'
import DefaultOutput from './Output.js'
import DefaultLimits from './Limits.js'
import DefaultDebug from './Debug.js'

export const RangeLayout = Context.Consumer(
  ({
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
)

export default RangeLayout
