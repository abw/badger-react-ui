import React from 'react'
import Context from './Context.js'
import DefaultInput from './Input.jsx'

const InputMin = ({
  Input=DefaultInput,
  minRange,
  maxRange,
  minInput,
  setMinInput,
  stepMinUp,
  stepMinDown,
  minValue,
  maxValue
}) => {
  const minLimit = maxValue - maxRange
  const maxLimit = maxValue - minRange
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
