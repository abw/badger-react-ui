import { ANY } from '@/src/constants.js'
import { coerceNumber } from '@/src/utils/math.js'
import {
  isNull, hasValue, isFunction, add, subtract, multiply, divide, clamp
} from '@abw/badger-utils'

export const initRange = (props={}) => {
  let { min=0, max=100, value, step, tickStep, quantize } = props

  // Coerce min and max to numbers and calculate the range
  min = coerceNumber(min)
  max = coerceNumber(max)
  const range = max - min

  // A specified value must be within the range of min to max, otherwise
  // the default value is half way between min and max
  value = hasValue(value)
    ? clamp(coerceNumber(value), min, max)
    : min + range / 2

  // An explicit step value can be 'any' or null (which is changed to 'any')
  // to indicate no stepping, or it should be coerced to a number.  If no step
  // is defined then it is assumed to be 1.
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step
  if (step === ANY || isNull(step)) {
    step = ANY
  }
  else if (hasValue(step)) {
    step = coerceNumber(step)
  }
  else {
    step = 1
  }

  const steps = step === ANY
    ? null
    : divide(range, step)

  tickStep ??= step
  const tickSteps = tickStep === ANY
    ? null
    : divide(range, tickStep)

  // create a quantizing function which snaps a value to the range and an
  // integer number of steps
  quantize = rangeQuantizer({ min, max, step, quantize })
  value = quantize(value)

  // function to convert a normalised (0-1) value to ranged/stepped value
  const normalToValue = normal =>
    quantize(
      add(
        min,
        multiply(
          range,
          clamp(normal, 0, 1)
        )
      )
    )
  const valueToNormal = value =>
    divide(
      subtract(
        clamp(value, min, max),
        min
      ),
      range
    )

  const normal  = valueToNormal(value)
  const percent = multiply(normal, 100)

  return {
    min, max, range, value, step, steps, tickStep, tickSteps,
    quantize, normal, percent,
    normalToValue, valueToNormal
  }
}

export const rangeQuantizer = ({ min, max, step, quantize }) => {
  // quantize can be a custom function, but the output must be clamped to
  // the range
  if (isFunction(quantize)) {
    return value => clamp(quantize(value), min, max)
  }
  // if the step is set to ANY then we only clamp the value to the range
  if (step === ANY) {
    return value => clamp(value, min, max)
  }

  // otherwise we return a function which rounds to the nearest step
  return value => {
    value = clamp(value, min, max)
    const steps = Math.round((value - min) / step)
    return add(
      min,
      multiply(steps, step)
    )
  }
}

