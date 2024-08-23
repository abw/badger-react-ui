import React from 'react'
import Context from './Context.js'
import DefaultInput from './Input.jsx'
import DefaultSelect from './Select.jsx'
import { clamp } from '@abw/badger-utils'

const InputMin = ({
  min,
  max,
  minRange,
  maxRange,
  minInput,
  setMinInput,
  stepMinUp,
  stepMinDown,
  minValue,
  maxValue,
  values,
  Input = values ? DefaultSelect : DefaultInput,
}) => {
  const minLimit    = clamp(maxValue - maxRange, min, max)
  const maxLimit    = clamp(maxValue - minRange, min, max)
  const canStepDown = minValue > minLimit
  const canStepUp   = minValue < maxLimit
  return (
    <Input
      stepDown={canStepDown ? stepMinDown : null}
      stepUp={canStepUp ? stepMinUp : null}
      min={minLimit}
      max={maxLimit}
      input={minInput}
      setInput={setMinInput}
    />
  )
}

export const RangeInputMin = Context.Consumer(InputMin)
export default RangeInputMin
