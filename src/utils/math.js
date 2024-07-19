import { isNumber } from '@abw/badger-utils'

export const coerceNumber = n =>
  isNumber(n)
    ? n
    : parseFloat(n)

