import { hasValue, isObject, isString } from '@abw/badger-utils'
import { classes, ClassesItem } from './classes'
import { rotateStyle } from './styles'
import { PropsObject } from '../types'

export const iconProps = (props: PropsObject, { side='' } = { }) => {
  const key  = `icon${side}`
  // e.g. icon, iconLeft, iconRight
  const name = props[key]
  // this may already be an object, otherwise we assume it's the name
  const pout: PropsObject = isObject(name) ? (name as PropsObject) : { name }
  // look for an additional class in props and add on on-left or on-right
  const className = classes(
    (pout.className as ClassesItem),
    (props[`${key}Class`] as ClassesItem),
    side ? `on-${side.toLowerCase()}` : null
  )
  // ignore a zero length className
  if (className.length) {
    pout.className = className
  }
  // look for an iconXXXRotate prop and add the style
  const rotate = props[`${key}Rotate`]
  if (hasValue(rotate)) {
    pout.style = rotateStyle(
      '--icon-rotate',
      rotate as string | undefined,
      pout.style as PropsObject | undefined
    )
  }
  return pout
}

export const iconNameOrProps = (name: string | PropsObject): PropsObject =>
  isString(name)
    ? { name }
    : name as PropsObject
