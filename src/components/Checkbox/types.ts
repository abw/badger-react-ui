import { MaybeTrueOrNumberString } from '@/src/types'

export interface CheckboxLabelProps {
  className?: string
  disabled?: boolean
  children?: React.ReactNode,
  ref?: React.Ref<HTMLLabelElement>
}

export interface CheckboxInputProps extends
  Omit<
    React.ComponentProps<'input'>,
    'className' | 'ref' | 'onChange'
  > {
  disabled?: boolean
  tabIndex?: number
  inputClass?: string
  round?: boolean
  square?: boolean
  switch?: boolean,
  onChange?: (checked: boolean) => void,
  ref?: React.Ref<HTMLInputElement>
}

export interface CheckboxProps extends
  Omit<
    CheckboxInputProps,
    'ref' | 'size'
  >,
  Omit<
    React.ComponentProps<'input'>,
    'className' | 'ref' | 'onChange' | 'size'
  > {
  size?: string
  color?: string
  className?: string
  border?: MaybeTrueOrNumberString
  inline?: boolean
  disabled?: boolean,
  checked?: boolean,
  text?: string,
  checkedText?: string,
  uncheckedText?: string,
  labelRef?: React.Ref<HTMLLabelElement>
  inputRef?: React.Ref<HTMLInputElement>,
  Label?: CheckboxLabelType
  Input?: CheckboxInputType
}

export type CheckboxType = React.FC<CheckboxProps>
export type CheckboxLabelType = React.FC<CheckboxLabelProps>
export type CheckboxInputType = React.FC<CheckboxInputProps>