import { MenuContextActions, MenuContextState } from '@/src/context/Menu'
import { WithIconsProps } from '../Icon'
// import { Placement, ReferenceType } from '@floating-ui/react'
import {
  FindOption, IsValidOption, SearchOptions, SelectOption, SelectOptionObject,
  WithIconsRenderer
} from '@/src/utils'
import { useTrigger, UseTriggerProps } from '@/src/hooks'

export type SelectProps =
  UseTriggerProps &
  WithIconsProps & {
  options: SelectOption[]
  value?: SelectOption
  search?: boolean
  disabled?: boolean
  wide?: boolean
  closeOnSelect?: boolean
  // closeOnBlur?: boolean
  className?: string      // FIXME: vs className (as an add-in?)
  selectClass?: string    // FIXME: vs className (as an add-in?)

  suffixIcon?: string
  // bodyClass?: string
  inputsClass?: string
  inputClass?: string
  suffixClass?: string
  menuClass?: string
  openClass?: string
  closedClass?: string
  optionClass?: string
  separatorClass?: string
  headingClass?: string
  noOptions?: string
  noOptionsClass?: string
  placeholder?: string
  placeholderClass?: string
  activeClass?: string
  selectedClass?: string
  disabledClass?: string

  searchPlaceholder?: string
  searchFieldClass?: string
  searchInputsClass?: string
  searchPrefixClass?: string
  searchSuffixClass?: string
  searchClearClass?: string
  searchIcon?: string
  clearSearchIcon?: string

  onUpdate?: (value: SelectOption) => void
  onSelect?: (value: SelectOption) => void,
  findOption?: FindOption
  validOption?: IsValidOption
  searchOptions?: SearchOptions
  displayValue?:   WithIconsRenderer
  displayOption?:  WithIconsRenderer
  displayHeading?: WithIconsRenderer
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
  SelectProps & {
    // bodyClass: string
    inputsClass: string
    inputClass: string
    suffixIcon: string
    suffixClass: string
    menuClass: string
    openClass: string
    closedClass: string
    optionClass: string
    separatorClass: string
    headingClass: string
    noOptions: string
    noOptionsClass: string
    placeholder: string
    placeholderClass: string
    activeClass: string
    selectedClass: string
    disabledClass: string

    searchPlaceholder: string
    searchFieldClass: string
    searchInputsClass: string
    searchPrefixClass: string
    searchSuffixClass: string
    searchClearClass: string
    searchIcon: string
    clearSearchIcon: string

    cursor?:        number | null
    setCursor:      (index: number) => void
    // select?:        SelectOption      // FIXME => remove '?'
    selected?:      SelectOption
    value?:         SelectOption
    selectOption:   (value: SelectOption) => void,
    menuRef:        React.RefObject<HTMLDivElement>
    activeRef:      (ref: HTMLElement | null) => void
    findOption:     FindOption
    validOption:    IsValidOption
    displayValue:   WithIconsRenderer
    displayOption:  WithIconsRenderer
    displayHeading: WithIconsRenderer
    onKeyDown:      (event: React.KeyboardEvent) => void
    searchRef:      React.RefObject<HTMLInputElement>
    searchInput?:   string
    focusSearch:    React.FocusEventHandler<HTMLInputElement>
    blurSearch:     React.FocusEventHandler<HTMLInputElement>
    setSearch:      (searchInput: string | undefined) => void
    clearSearch:    (e?: React.MouseEvent) => void
  }

export type SelectState = MenuContextState & {
  closeOnBlur?: boolean
  searchInput?: string
  searchFocus?: boolean
  value?: SelectOption
  options?: SelectOption[]
}

export type SelectActions = MenuContextActions & {
  onMouseEnter: () => void
  onMouseLeave: () => void
  onFocus: () => void
  onBlur: () => void
  onClick: () => void,
  onKeyDown: (event: React.KeyboardEvent) => void
  open: () => void
  close: () => void
  setCursor: (cursor: number | null) => void
  selectCursor: () => void
  selectOption: (value: SelectOption) => void
  menuRef: (ref: HTMLElement | null) => void
  activeRef: (ref: HTMLElement | null) => void
  searchRef: (ref: HTMLElement | null) => void
  focusSearch: (e: React.FocusEvent) => void
  blurSearch: () => void,
  setSearch: (search: string) => void
  clearSearch: () => void
  //triggerRef: (ref: HTMLElement) => void
}


export type SelectItemProps = {
  option: SelectOption
  active: boolean
}

export type SelectOptionProps = {
  option: SelectOptionObject
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
