import { hasValue, isInteger } from '@abw/badger-utils'
import { PropsObject } from '../types'

export function rotateStyle(prop: string, value: string, style: PropsObject={}) {
  if (hasValue(value)) {
    style[prop] = isInteger(value)
      ? `${value}deg`
      : value
  }
  return Object.keys(style).length
    ? style
    : null
}

export interface StringPropsObject {
  [key: string]: string
}

export const extractStyleProps = (
  spec: StringPropsObject,
  props: PropsObject = { },
  more={}
) =>
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
        (props.style || { }) as PropsObject,
      ),
    ...more
  })
