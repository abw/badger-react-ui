import { WithIconsProps } from '../Icon'
import { useTrigger, UseTriggerProps } from '@/src/hooks'
import { selectModelDefaults, selectRenderDefaults } from './defaults'
import { FindOption, SearchOptions, SelectOption, SelectOptionObject, } from '@/src/utils'

export type SelectModelDefaults = typeof selectModelDefaults
export type SelectRenderDefaults = typeof selectRenderDefaults

export type SelectProps =
  UseTriggerProps &
  WithIconsProps &
  Partial<SelectModelDefaults> &
  Partial<SelectRenderDefaults> & {
  options: SelectOption[]
  value?: SelectOption
  disabled?: boolean
  wide?: boolean

  // className?: string      // FIXME: vs className (as an add-in?)
  // selectClass?: string    // FIXME: vs className (as an add-in?)
  onUpdate?: (value?: SelectOption) => void
  onSelect?: (value?: SelectOption) => void,
  findOption?: FindOption
  searchOptions?: SearchOptions
  Content?: SelectContentType
  Input?: SelectInputType,
  Search?: SelectSearchType,
  Menu?: SelectMenuType,
  Item?: SelectItemType
  NoOptions?: SelectNoOptionsType
  Heading?: SelectHeadingType
  Separator?: SelectSeparatorType
  Option?: SelectOptionType
  //content?: React.ReactNode
  //children?: React.ReactNode
}

export type SelectRenderProps =
  // Omit<ReturnType<typeof useTrigger>, 'triggerRef' | 'triggerProps'> &
  Omit<ReturnType<typeof useTrigger>, 'triggerProps'> &
  SelectProps &
  SelectRenderDefaults & {
    cursor?:        number | null
    setCursor:      (index: number) => void
    // select?:        SelectOption      // FIXME => remove '?'
    selected?:      SelectOption
    value?:         SelectOption
    selectOption:   (value: SelectOption) => void,
    menuRef:        React.RefObject<HTMLDivElement>
    activeRef:      (ref: HTMLElement | null) => void
    onKeyDown:      (event: React.KeyboardEvent) => void
    searchRef:      React.RefObject<HTMLInputElement>
    searchInput?:   string
    focusSearch:    React.FocusEventHandler<HTMLInputElement>
    blurSearch:     React.FocusEventHandler<HTMLInputElement>
    setSearch:      (searchInput: string | undefined) => void
    clearSearch:    (e?: React.MouseEvent) => void
  }

export type SelectItemProps = {
  option: SelectOption
  active: boolean
}

export type SelectOptionProps = {
  option: SelectOption
  optionObject: SelectOptionObject
  active: boolean
}

export type SelectHeadingProps = {
  option: SelectOptionObject
}

export type SelectSeparatorProps = {
  option: SelectOptionObject
}

export type SelectContentType = React.FC
export type SelectInputType = React.FC
export type SelectSearchType = React.FC
export type SelectMenuType = React.FC
export type SelectItemType = React.FC
export type SelectNoOptionsType = React.FC
export type SelectHeadingType = React.FC
export type SelectSeparatorType = React.FC
export type SelectOptionType = React.FC
