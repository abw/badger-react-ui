import Context from './Context'
import DefaultInput from './Input'
import DefaultSelect from './Select'
import { clamp } from '@abw/badger-maths'

export const RangeInputMin = Context.Consumer(
  ({
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
    options,
    Input = options ? DefaultSelect : DefaultInput,
  }) => {
    const minLimit    = clamp(maxValue - maxRange, min, max)
    const maxLimit    = clamp(maxValue - minRange, min, max)
    const canStepDown = minValue > minLimit
    const canStepUp   = minValue < maxLimit
    return (
      <Input
        stepDown={canStepDown ? stepMinDown : undefined}
        stepUp={canStepUp ? stepMinUp : undefined}
        min={minLimit}
        max={maxLimit}
        input={minInput}
        setInput={setMinInput}
      />
    )
  }
)

export default RangeInputMin
