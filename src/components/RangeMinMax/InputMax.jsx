import React from 'react'
import Context from './Context.js'
import DefaultInput from './Input.jsx'

const InputMax = ({
  Input=DefaultInput,
  minRange,
  maxRange,
  maxInput,
  setMaxInput,
  stepMaxUp,
  stepMaxDown,
  minValue,
  maxValue
}) => {
  const minLimit = minValue + minRange
  const maxLimit = minValue + maxRange
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

export const RangeMinMaxInputMax = Context.Consumer(InputMax)
export default RangeMinMaxInputMax
