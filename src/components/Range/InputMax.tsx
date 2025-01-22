import Context from './Context'
import DefaultInput from './Input'
import DefaultSelect from './Select'
import { clamp } from '@abw/badger-maths'

export const RangeInputMax = Context.Consumer(
  ({
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
        stepDown={canStepDown ? stepMaxDown : undefined}
        stepUp={canStepUp ? stepMaxUp : undefined}
        min={minLimit}
        max={maxLimit}
        input={maxInput}
        setInput={setMaxInput}
      />
    )
  }
)

export default RangeInputMax
