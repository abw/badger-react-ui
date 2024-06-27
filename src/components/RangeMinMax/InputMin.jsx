import React from 'react'
import Context from './Context.js'
import DefaultInput from './Input.jsx'
import { clamp } from '@abw/badger-utils'

const InputMin = ({
  Input=DefaultInput,
  min,
  max,
  minRange,
  maxRange,
  minInput,
  setMinInput,
  stepMinUp,
  stepMinDown,
  minValue,
  maxValue
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

export const RangeMinMaxInputMin = Context.Consumer(InputMin)
export default RangeMinMaxInputMin
