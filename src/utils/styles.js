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

export const extractStyleProps = (spec, props, more={}) =>
  ({
    ...Object
      .entries(spec)
      .reduce(
        (style, [key, sprop]) => {
          const value = props[key]
          if (hasValue(value)) {
            style[sprop] = value
          }
          return style
        },
        props.style || { },
      ),
    ...more
  })
