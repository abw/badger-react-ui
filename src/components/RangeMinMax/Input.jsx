import React from 'react'
import Context from './Context.js'
import Icon from '../Icon/Icon.jsx'
import { classes } from '@/src/utils/classes.js'

const Input = ({
  inputClass='range-input field',
  hasScaleClass='range-has-scale',
  stepClass='step',
  inputInputsClass='inputs inline',
  inputPrefixClass='prefix shaded lined',
  inputSuffixClass='suffix shaded lined',
  disabledClass='disabled',
  stepDownIcon='minus',
  stepUpIcon='plus',
  showTicks,
  showScale,
  inLimits,
  min,
  max,
  step,
  stepUp,
  stepDown,
  input,
  setInput
}) =>
  <div
    className={
      classes(
        inputClass,
        // nasty hack to push the input down when the scale is displayed
        (showTicks && showScale && ! inLimits) ? hasScaleClass : null
      )
    }
  >
    <div className={inputInputsClass}>
      <div
        className={classes(inputPrefixClass, stepClass, stepDown ? null : disabledClass)}
        onClick={stepDown}
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
        onChange={e => setInput(e.target.value)}
      />
      <div
        className={classes(inputSuffixClass, stepClass, stepUp ? null : disabledClass)}
        onClick={stepUp}
      >
        <Icon name={stepUpIcon}/>
      </div>
    </div>
  </div>

export const RangeMinMaxInput = Context.Consumer(Input)
export default RangeMinMaxInput
