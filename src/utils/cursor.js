import { isNumber, isString } from '@abw/badger-utils'

export const defaultOptionIsValid = option =>
  isString(option) || isNumber(option) ||
    (! option.separator && ! option.heading && ! option.disabled)


export function cursorFirst(options, isValid=defaultOptionIsValid) {
  const index = options.findIndex(isValid)
  return index < 0
    ? null
    : index
}

export function cursorLast(options, isValid=defaultOptionIsValid) {
  for (let i = options.length - 1; i >= 0; i--) {
    if (isValid(options[i])) {
      return i
    }
  }
  return null
}

export function cursorNext(options, current, isValid=defaultOptionIsValid) {
  for (let i = 1; i < options.length; i++) {
    const n = (current + i) % options.length
    if (isValid(options[n])) {
      return n
    }
  }
  return null
}

export function cursorPrev(options, current, isValid=defaultOptionIsValid) {
  for (let i = 1; i < options.length; i++) {
    const n = (current + options.length - i) % options.length
    if (isValid(options[n])) {
      return n
    }
  }
  return null
}