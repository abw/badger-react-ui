import { isNumber } from '@abw/badger-utils'

export const coerceNumber = n =>
  isNumber(n)
    ? n
    : parseFloat(n)

export const valuePercent = (value, min, max) =>
  (value - min) * 100 / (max - min)

export const roundStep = (value, step, min=0, max=100) => {
  const l = Math.clamp(value, min, max)
  const n = Math.round((l - min) / step)
  return min + n * step
}