import { hasValue, isObject } from '@abw/badger-utils'

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

export const borderClass = border => {
  if (border === true) {
    return 'border'
  }
  if (parseInt(border)) {
    return `border bdw-${border}`
  }
  return null
}

export const shadowClass = shadow =>
  shadow
    ? `shadow-${shadow === true ? 1 : shadow}`
    : null

export const radiusClass = radius =>
  radius
    ? `bdr-${radius}`
    : null
