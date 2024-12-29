import { isNumber } from '@abw/badger-utils'

export const coerceNumber = (n: string | number) =>
  isNumber(n)
    ? n
    : parseFloat(n as string)

