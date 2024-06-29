import { ANY } from '@/src/constants.js'
import { coerceNumber } from '@/src/utils/math.js'
import {
  isNull, hasValue, isFunction, add, subtract, multiply, divide, clamp
} from '@abw/badger-utils'

export const initRange = (props={}) => {
  let {
    min=0, max=100,
    minNormal=0.25, maxNormal=0.75,
    minValue, maxValue,
    minRange, maxRange,
    step, tickStep, quantize
  } = props

  // Coerce min and max to numbers and calculate the range
  min = coerceNumber(min)
  max = coerceNumber(max)
  const range = max - min

  // The specified values for minValue and maxValue must be within the range
  // of min to max, otherwise the default values are 1/4 and 3/4 of the range
  // between min and max
  minValue = hasValue(minValue)
    ? clamp(coerceNumber(minValue), min, max)
    : min + range * minNormal
  maxValue = hasValue(maxValue)
    ? clamp(coerceNumber(maxValue), min, max)
    : min + range * maxNormal
  minRange = hasValue(minRange)
    ? clamp(coerceNumber(minRange), 0, range)
    : 0
  maxRange = hasValue(maxRange)
    ? clamp(coerceNumber(maxRange), 0, range)
    : range

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
  minValue = quantize(minValue)
  maxValue = quantize(maxValue)

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
  const valueToNormal = (value, clampMin=min, clampMax=max) =>
    divide(
      subtract(
        clamp(value, clampMin, clampMax),
        min
      ),
      range
    )

  minNormal = valueToNormal(minValue)
  maxNormal = valueToNormal(maxValue)
  const minPercent = multiply(minNormal, 100)
  const maxPercent = multiply(maxNormal, 100)

  return {
    min, max, range, minValue, maxValue, minRange, maxRange,
    minInput: minValue, maxInput: maxValue,
    step, steps, tickStep, tickSteps,
    quantize, minNormal, maxNormal, minPercent, maxPercent,
    normalToValue, valueToNormal
  }
}

export const rangeQuantizer = ({ min, max, step, quantize }) => {
  // quantize can be a custom function, but the output must be clamped to
  // the range
  if (isFunction(quantize)) {
    return (value, clampMin=min, clampMax=max) =>
      clamp(quantize(value), clampMin, clampMax)
  }
  // if the step is set to ANY then we only clamp the value to the range
  if (step === ANY) {
    return (value, clampMin=min, clampMax=max) =>
      clamp(value, clampMin, clampMax)
  }

  // otherwise we return a function which rounds to the nearest step
  return (value, clampMin=min, clampMax=max) => {
    value = clamp(value, clampMin, clampMax)
    const steps = Math.round((value - min) / step)
    return add(
      min,
      multiply(steps, step)
    )
  }
}

export const rangeNormalClick = (normal, minNormal, maxNormal, setMin, setMax) => {
  if (normal < minNormal) {
    return setMin(normal)
  }
  else if (normal > maxNormal) {
    return setMax(normal)
  }
  const dMin = normal - minNormal
  const dMax = maxNormal - normal
  if (dMin < dMax) {
    return setMin(normal)
  }
  else {
    return setMax(normal)
  }
}
/*
export const rangeMinNormalClick = (normal, minNormal, maxNormal, setMin) =>
  setMin(normal)

export const rangeMaxNormalClick = (normal, minNormal, maxNormal, setMin, setMax) =>
  setMax(normal)
*/