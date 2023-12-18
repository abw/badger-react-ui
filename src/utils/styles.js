import { hasValue, isInteger } from '@abw/badger-utils'

export function rotateStyle(prop, value, style={}) {
  if (hasValue(value)) {
    style[prop] = isInteger(value)
      ? `${value}deg`
      : value
  }
  return Object.keys(style).length
    ? style
    : null
}