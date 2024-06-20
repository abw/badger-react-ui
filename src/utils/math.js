import { isFunction, fail, isInteger, identity, isBoolean } from '@abw/badger-utils'

export const clamp = (n, min, max) =>
  Math.min(Math.max(n, min), max)

// Return a function to round a number.  The round argument can be a function
// which is assumed to be a custom rounding function.  If round is a boolean
// value then it returns a function that rounds to the nearest integer when
// true, or the identity function (which returns the argument unchanged) when
// false.  If round is a signed integer then it returns a function that rounds
// a value to that precision. e.g
//   * round == 1, round value to the nearest 0.1
//   * round == 2, round value to the nearest 0.01,
//   * round == -1, round to the nearest 10
//   * round == -2, round to the nearest 100
export const valueRounder = round => {
  if (isFunction(round)) {
    return round
  }
  if (isBoolean(round)) {
    return round
      ? value => Math.round(value)
      : identity
  }
  if (isInteger(round)) {
    const multiplier = Math.pow(10, round || 0)
    return value => Math.round(value * multiplier) / multiplier
  }
  fail(`Invalid argument passed to valueRounder() (${round})`)
}

export const valuePercent = (value, min, max) =>
  (value - min) * 100 / (max - min)
