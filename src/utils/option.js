import { isBoolean, isNumber, isString } from '@abw/badger-utils'

export const isSimple = value =>
  isString(value) || isNumber(value) || isBoolean(value)

export const validOption = option =>
  isSimple(option) ||
    (! option.separator && ! option.heading && ! option.disabled)

export const optionValue = option =>
  isSimple(option)
    ? option
    : (option.value ?? option.id)

export const findOption = (options, value, optVal=optionValue) => {
  const index  = options.findIndex(
    option => value === optVal(option)
  )
  return index >= 0
    ? [options[index], index]
    : [ ]
}
