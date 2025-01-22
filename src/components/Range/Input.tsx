import Context from './Context'
import Icon from '@/components/Icon/Icon'
import { classes } from '@/src/utils/classes'
import { RangeInputProps } from './types'
import {
  RANGE_DISABLED_CLASS, RANGE_INPUT_CLASS, RANGE_INPUT_INPUTS_CLASS,
  RANGE_INPUT_PREFIX_CLASS, RANGE_INPUT_SUFFIX_CLASS, RANGE_STEP_CLASS,
  RANGE_STEP_DOWN_ICON, RANGE_STEP_UP_ICON
} from './Constants.js'

export const RangeInput = Context.Consumer<
  RangeInputProps
> (
  ({
    inputClass=RANGE_INPUT_CLASS,
    stepClass=RANGE_STEP_CLASS,
    inputInputsClass=RANGE_INPUT_INPUTS_CLASS,
    inputPrefixClass=RANGE_INPUT_PREFIX_CLASS,
    inputSuffixClass=RANGE_INPUT_SUFFIX_CLASS,
    disabledClass=RANGE_DISABLED_CLASS,
    stepDownIcon=RANGE_STEP_DOWN_ICON,
    stepUpIcon=RANGE_STEP_UP_ICON,
    min,
    max,
    step,
    stepUp,
    stepDown,
    input,
    setInput
  }) =>
    <div className={inputClass}>
      <div className={inputInputsClass}>
        <div
          className={classes(inputPrefixClass, stepClass, stepDown ? null : disabledClass)}
          onClick={stepDown || undefined}
        >
          <Icon name={stepDownIcon}/>
        </div>
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={input}
          className="inline"
          onChange={e => setInput(parseFloat(e.target.value))}
        />
        <div
          className={classes(inputSuffixClass, stepClass, stepUp ? null : disabledClass)}
          onClick={stepUp}
        >
          <Icon name={stepUpIcon}/>
        </div>
      </div>
    </div>
)

export default RangeInput
