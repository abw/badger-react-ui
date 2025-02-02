import { InputHTMLAttrs, MaybeTrueOrNumberString } from '@/src/types'

export type CheckboxProps  = {
  size?: string
  color?: string
  className?: string
  border?: MaybeTrueOrNumberString
  inline?: boolean
  disabled?: boolean
  checked?: boolean
  text?: string
  checkedText?: string
  uncheckedText?: string
  labelRef?: React.Ref<HTMLLabelElement>
  inputRef?: React.Ref<HTMLInputElement>
  Label?: CheckboxLabelComponent
  Input?: CheckboxInputComponent
} & Omit<CheckboxInputProps, 'ref' | 'size'>
  & Omit<InputHTMLAttrs, 'className' | 'onChange' | 'size'>


export type CheckboxLabelProps = {
  className?: string
  disabled?: boolean
  children?: React.ReactNode,
  labelRef?: React.Ref<HTMLLabelElement>
}

export type CheckboxInputProps = {
  disabled?: boolean
  tabIndex?: number
  inputClass?: string
  round?: boolean
  square?: boolean
  switch?: boolean,
  onChange?: (checked: boolean) => void,
  inputRef?: React.Ref<HTMLInputElement>
} & Omit<InputHTMLAttrs, 'className' | 'onChange'>

export type CheckboxComponent = React.FC<CheckboxProps>
export type CheckboxLabelComponent = React.FC<CheckboxLabelProps>
export type CheckboxInputComponent = React.FC<CheckboxInputProps>