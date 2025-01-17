export type RadioOnChange = (value: unknown) => void

export type RadioLabelProps = {
  className?: string
  disabled?: boolean
  children: React.ReactNode
}

export type RadioInputProps = {
  name: string
  option: RadioOptionObject
  tabIndex?: number
  onChange: RadioOnChange
  checked?: boolean
  className?: string
}

export type RadioOptionObject = {
  value: unknown
  text?: string
  label?: string
  name?: string
  labelClass?: string
  disabled?: boolean
  inputClass?: string
}

export type RadioOptionItem = RadioOptionObject | unknown

export type RadioOptionProps = {
  name: string
  value?: unknown
  option: RadioOptionObject
  checked?: boolean
  inline?: boolean
  border?: boolean
  labelClass?: string
  inputClass?: string
  Label?: RadioLabelType
  Input?: RadioInputType,
  onChange: RadioOnChange
}

export type RadioProps = Omit<RadioOptionProps, 'name' | 'option'> & {
  name?: string
  value?: unknown
  options: RadioOptionItem[]
  className?: string
  disabled?: boolean
  Option?: RadioOptionType
}

export type RadioLabelType = React.FC<RadioLabelProps>
export type RadioInputType = React.FC<RadioInputProps>
export type RadioOptionType = React.FC<RadioOptionProps>
export type RadioType = React.FC<RadioProps>