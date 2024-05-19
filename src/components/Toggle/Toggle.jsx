import React from 'react'
import { Themed } from '@/src/Theme.jsx'
import { Buttons, classes } from '@/src/index.jsx'
import { doNothing, isInteger, isObject } from '@abw/badger-utils'

export const defaultToggleOptions=[
  { text: 'On',  value: true  },
  { text: 'Off', value: false },
]

export const matchToggleOption = (option, selected) =>
  option.value === (
    isObject(selected)
      ? selected.value
      : selected
  )

export const selectedToggleIndex = (options, selected) =>
  isInteger(selected)
    ? selected
    : options.findIndex( option => matchToggleOption(option, selected) )

const Toggle = ({
  selected=0,
  findSelectedIndex=selectedToggleIndex,
  onSelect=doNothing,
  options=defaultToggleOptions,
  activeProps={ },
  inactiveProps={ className: 'outline' },
  buttonsClass='buttons',
  size,
  className,
  ...props
} = { }) => {
  const selectedIndex = findSelectedIndex(options, selected)
  const buttons = options.map(
    (option, n) => {
      const isSelected = n === selectedIndex
      return {
        ...option,
        ...( isSelected ? activeProps : inactiveProps ),
        className: classes(
          option.className,
          isSelected ? activeProps.className : inactiveProps.className
        ),
        onClick: () => onSelect(option, n)
      }
    }
  )
  return (
    <Buttons
      buttons={buttons}
      className={classes(size, className, buttonsClass)}
      {...props}
    />
  )
}

export default Themed(Toggle, 'Toggle')