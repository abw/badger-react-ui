import React from 'react'
import Context from './Context.js'
// import DefaultValue from './Value.jsx'

const Input = ({
  inputClass='range-input',
  min,
  max,
  step,
  input,
  setInput
  // Value=DefaultValue,
}) =>
  <div className={inputClass}>
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      value={input}
      className="inline"
      onChange={e => setInput(e.target.value)}
    />
  </div>

export const RangeOutput = Context.Consumer(Input)
export default RangeOutput
