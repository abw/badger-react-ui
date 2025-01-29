import { isBoolean, isString } from '@abw/badger-utils'

export const coerceBoolean = (value: unknown) =>
  isString(value)
    ? Boolean(parseInt(value))
    : Boolean(value)

export const coerceInteger = (value: unknown) =>
  isString(value)
    ? parseInt(value)
    : isBoolean(value)
      ? (value ? 1 : 0)
      : value

export const coerceFloat = (value: unknown) =>
  isString(value)
    ? parseFloat(value)
    : isBoolean(value)
      ? (value ? 1 : 0)
      : value

