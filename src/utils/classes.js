import { hasValue, isInteger, isObject } from '@abw/badger-utils'
import { maybeFunction } from './functions.js'

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

export const borderClass = border =>
  classTrueInt(border, 'border', b => `border bdw-${b}`)

export const shadowClass = shadow =>
  classTrueInt(shadow, 'shadow-1', s => `shadow-${s}`)

export const radiusClass = radius =>
  classInt(radius, r => `bdr-${r}`)

export const classInt = (c, i) =>
  isInteger(c)
    ? maybeFunction(i, c)
    : null

export const classTrueInt = (c, t, i) =>
  c === true
    ? t
    : parseInt(c)
      ? maybeFunction(i, c)
      : null

