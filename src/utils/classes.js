import { hasValue, isInteger, isObject, maybeFunction } from '@abw/badger-utils'

export const joinClasses = classes =>
  classes
    .filter(hasValue)
    .join(' ')

export const setKeys = props =>
  Object.entries(props)
    .filter( ([ , value]) => value )
    .map( ([key]) => key )

export const classes = (...inputs) => joinClasses(
  inputs.flatMap(
    input =>
      isObject(input)
        ? setKeys(input)
        : input
  )
)

export const colorClass = color => {
  if (! color) {
    return null
  }
  const [range, fore, back, foreDark, backDark] = color.split('-')
  return classes(
    range,
    foregroundClass(fore),
    backgroundClass(back),
    foregroundDarkClass(foreDark),
    backgroundDarkClass(backDark)
  )
}

export const sizeColorProps = ({
  className,
  size,
  color,
  ...props
}) => ({
  ...props,
  className: classes(
    className, size,
    colorClass(color)
  )
})

export const borderClass = border =>
  classTrueInt(border, 'border', b => `border bdw-${b}`)

export const shadowClass = shadow =>
  classTrueInt(shadow, 'shadow-1', s => `shadow-${s}`)

export const radiusClass = radius =>
  classInt(radius, r => `bdr-${r}`)

export const foregroundClass = stop =>
  classInt(stop, s => `fgc-${s}`)

export const backgroundClass = stop =>
  classInt(stop, s => `bgc-${s}`)

export const foregroundDarkClass = stop =>
  classInt(stop, s => `fgd-${s}`)

export const backgroundDarkClass = stop =>
  classInt(stop, s => `bgd-${s}`)

export const classInt = (c, i) =>
  isInteger(parseInt(c))
    ? maybeFunction(i, c)
    : null

export const classTrueInt = (c, t, i) =>
  c === true
    ? t
    : parseInt(c)
      ? maybeFunction(i, c)
      : null

