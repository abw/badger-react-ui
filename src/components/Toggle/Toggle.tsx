import { Themed } from '@/src/Theme'
import { Buttons, classes } from '@/src/index'
import { doNothing } from '@abw/badger-utils'
import { defaultToggleOptions, selectedToggleIndex } from './Utils'
import { ToggleType } from './types'

const Toggle: ToggleType = ({
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
    (option, n: number) => {
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