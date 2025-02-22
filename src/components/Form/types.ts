import { FieldValue, FormButtonsProps } from '@abw/badger-form'
import { ButtonComponent, ButtonProps } from '../Button/types'
import { SpinnerComponent, SpinnerProps } from '../Spinner/types'
import { SelectOption } from '@/src/utils'
import { RangeOption, RangeState, RangeValue } from '../Range/types'
import { SearchOnSearch } from '../Search/types'

export interface SubmittingProps extends SpinnerProps {
  text?: string
  size?: string
  className?: string
  light?: boolean
  dark?: boolean
  fixed?: boolean
  spinnerSize?: string
  Spinner?: SpinnerComponent
}

export interface CancelProps extends ButtonProps {
  Button?: ButtonComponent
}

export interface ResetProps extends ButtonProps {
  Button?: ButtonComponent
}

export interface SubmitProps extends ButtonProps {
  Button?: ButtonComponent
}

export interface CancelSubmitProps extends FormButtonsProps {
  cancel?: CancelProps
  submit?: SubmitProps
}

export interface ResetSubmitProps extends FormButtonsProps {
  reset?: ResetProps
  submit?: SubmitProps
}

export type InputRangeChangeValue = (
  min: number,
  max: number,
  state: RangeState
) => [number, number]

export type InputRangeMinChangeValue = (
  min: number,
  state: RangeState
) => number

export type InputRangeMaxChangeValue = (
  max: number,
  state: RangeState
) => number

export type InputRangeFieldExtras = {
  changeValue: InputRangeChangeValue
  options: RangeOption[]
  value: RangeValue
}

export type InputRangeMinFieldExtras = {
  changeValue: InputRangeMinChangeValue
  options: RangeOption[]
  value: RangeValue
}

export type InputRangeMaxFieldExtras = {
  changeValue: InputRangeMaxChangeValue
  options: RangeOption[]
  value: RangeValue
}

export type InputSearchFieldExtras = {
  onSearch: SearchOnSearch
  selectValue: (option?: SelectOption) => FieldValue
  onUpdate?: (option?: SelectOption) => void
}

export type InputSelectFieldExtras = {
  options: SelectOption[]
  selectValue: (option?: SelectOption) => FieldValue
  onUpdate?: (option?: SelectOption) => void
}