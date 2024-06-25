import React from 'react'
import Context from './Context.js'
import Icon from '../Icon/Icon.jsx'

const Input = ({
  inputClass='range-input field',
  min,
  max,
  step,
  input,
  setInput,
  stepUp,
  stepDown,
  value
}) =>
  <div className={inputClass}>
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
