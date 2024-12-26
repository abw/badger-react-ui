import { fail } from '@abw/badger-utils'
import { breakpoints } from './breakpoint.js'

export const parseSize = size => {
  const matchPx = size.match(/^(\d+)px$/)
  if (matchPx) {
    return parseInt(matchPx[1])
  }

  const matchRem = size.match(/^(\d+)rem$/)
  if (matchRem) {
    return parseInt(matchRem[1] * 16)
  }

  const matchInt = size.match(/^(\d+)$/)
  if (matchInt) {
    return parseInt(matchInt[1])
  }

  return breakpoints[size]
    || fail(`Invalid size specified: ${size}`)
}