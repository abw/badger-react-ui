import { SelectOptions, validOption } from './option'

export function cursorFirst(options: SelectOptions, isValid=validOption) {
  const index = options.findIndex(isValid)
  return index < 0
    ? null
    : index
}

export function cursorLast(options: SelectOptions, isValid=validOption) {
  for (let i = options.length - 1; i >= 0; i--) {
    if (isValid(options[i])) {
      return i
    }
  }
  return null
}

export function cursorNext(options: SelectOptions, current: number, isValid=validOption) {
  for (let i = 1; i <= options.length; i++) {
    const n = (current + i) % options.length
    if (isValid(options[n])) {
      return n
    }
  }
  return null
}

export function cursorPrev(options: SelectOptions, current: number, isValid=validOption) {
  for (let i = 1; i <= options.length; i++) {
    const n = (current + options.length - i) % options.length
    if (isValid(options[n])) {
      return n
    }
  }
  return null
}