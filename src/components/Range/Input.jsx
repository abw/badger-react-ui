import React from 'react'
import Context from './Context.js'
import Icon from '../Icon/Icon.jsx'
import { classes } from '@/src/utils/classes.js'

const Input = ({
  inputClass='range-input field',
  hasScaleClass='range-has-scale',
  showTicks,
  showScale,
  inLimits,
  min,
  max,
  step,
  input,
  setInput,
  stepUp,
  stepDown,
  value
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
    <div className="inputs inline">
      <div
        className={`prefix shaded lined ${value > min ? 'clickable' : 'disabled'}`}
        onClick={value > min ? stepDown : null}
      >
        <Icon name="minus"/>
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
        className={`suffix shaded lined ${value < max ? 'clickable' : 'disabled'}`}
        onClick={value < max ? stepUp : null}
      >
        <Icon name="plus"/>
      </div>
    </div>
  </div>

export const RangeOutput = Context.Consumer(Input)
export default RangeOutput
