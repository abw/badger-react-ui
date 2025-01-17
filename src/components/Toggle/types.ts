import { ButtonProps } from '@/components/Button/types'
import { ButtonsProps } from '../Buttons'

export type ToggleValue = number | string | boolean
export type ToggleOption = Omit<ButtonsProps, 'value'> & {
  text: string,
  value?: ToggleValue
  className?: string
}
// export type ToggleOption = ToggleValue | ToggleObject
export type ToggleOptions = ToggleOption[]

export type ToggleProps = Omit<ButtonsProps, 'onSelect'> & {
  selected?: ToggleValue
  className?: string
  size?: string
  buttonsClass?: string
  activeProps?: ButtonProps
  inactiveProps?: ButtonProps
  findSelectedIndex?: ToggleSelector
  options?: ToggleOptions
  onSelect?: ToggleSelect
//  ...props
}

export type UseToggleProps = ToggleProps & {
  storageKey?: string
  storageItem?: string
}

export type ToggleSelector = (
  options: ToggleOption[],
  selected: ToggleOption | ToggleValue
) => number

export type ToggleSelect = (
  option: ToggleOption,
  n: number
) => void

export type ToggleType = React.FC<ToggleProps>
export type UseToggleType = (props: UseToggleProps) => [
  ToggleOption,
  ToggleType,
  (option: ToggleOption | ToggleValue) => void,
  () => void
]