import React from 'react'
import Context from './Context.js'
import Icon from '@/components/Icon/Icon'
import { classes } from '@/src/utils/classes'

const Input = ({
  inputClass='range-input field mar-b-none',
  stepClass='step',
  inputInputsClass='inputs inline',
  inputPrefixClass='prefix shaded lined',
  inputSuffixClass='suffix shaded lined',
  disabledClass='disabled',
  stepDownIcon='minus',
  stepUpIcon='plus',
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

export const RangeInput = Context.Consumer(Input)
export default RangeInput
