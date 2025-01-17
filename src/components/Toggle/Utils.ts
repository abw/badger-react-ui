import { isNumber, isObject } from '@abw/badger-utils'
import { ToggleOption, ToggleOptions, ToggleSelector, ToggleValue } from './types'

export const defaultToggleOptions: ToggleOptions = [
  { text: 'On',  value: true  },
  { text: 'Off', value: false },
]

export const matchToggleOption = (
  option: ToggleOption,
  selected: ToggleOption | ToggleValue
) =>
  option.value === (
    isObject(selected)
      ? selected.value
      : selected
  )

export const selectedToggleIndex: ToggleSelector = (
  options,
  selected
) =>
  isNumber(selected)
    ? selected
    : options.findIndex( option => matchToggleOption(option, selected) )

