import React from 'react'
import Context from './Context.js'
import DefaultInput from './Input.jsx'
import DefaultSelect from './Select.jsx'
import { clamp } from '@abw/badger-utils'

const InputMax = ({
  min,
  max,
  minRange,
  maxRange,
  maxInput,
  setMaxInput,
  stepMaxUp,
  stepMaxDown,
  minValue,
  maxValue,
  options,
  Input = options ? DefaultSelect : DefaultInput,
}) => {
  const minLimit = clamp(minValue + minRange, min, max)
  const maxLimit = clamp(minValue + maxRange, min, max)
  const canStepUp   = maxValue < maxLimit
  const canStepDown = maxValue > minLimit
  return (
    <Input
      stepDown={canStepDown ? stepMaxDown : null}
      stepUp={canStepUp ? stepMaxUp : null}
      min={minLimit}
      max={maxLimit}
      input={maxInput}
      setInput={setMaxInput}
    />
  )
}

export const RangeInputMax = Context.Consumer(InputMax)
export default RangeInputMax
