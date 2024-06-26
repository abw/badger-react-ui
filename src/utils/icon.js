import { hasValue, isObject } from '@abw/badger-utils'
import { classes } from './classes.js'
import { rotateStyle } from './styles.js'
import { isString } from '@abw/badger-utils'

export const iconProps = (props, { side='' } = { }) => {
  const key  = `icon${side}`
  // e.g. icon, iconLeft, iconRight
  const name = props[key]
  // this may already be an object, otherwise we assume it's the name
  const pout = isObject(name) ? name : { name }
  // look for an additional class in props and add on on-left or on-right
  const className = classes(
    pout.className,
    props[`${key}Class`],
    side ? `on-${side.toLowerCase()}` : null
  )
  // ignore a zero length className
  if (className.length) {
    pout.className = className
  }
  // look for an iconXXXRotate prop and add the style
  const rotate = props[`${key}Rotate`]
  if (hasValue(rotate)) {
    pout.style = rotateStyle('--icon-rotate', rotate, pout.style)
  }
  return pout
}

export const iconNameOrProps = name =>
  isString(name)
    ? { name }
    : name
