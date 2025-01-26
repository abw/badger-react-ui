// import { MenuContextActions, MenuContextProps, MenuContextState } from '@/src/context/Menu'
import { WithIconsProps } from '../Icon'
// import { Placement, ReferenceType } from '@floating-ui/react'
import { Placement } from '@floating-ui/react'
import { IsValidOption, SelectOption, SelectOptionObject, WithIconsRenderer } from '@/src/utils'
import { useTrigger, UseTriggerProps } from '@/src/hooks'
import { DropdownBodyProps, DropdownBodyRef, DropdownBodyStyle, DropdownIconProps, DropdownTriggerProps, DropdownTriggerRef } from '../Dropdown/types'

export type DropdownMenuProps =
  UseTriggerProps &
  WithIconsProps & {
  options: SelectOption[]
  closeOnSelect: boolean
  bodyClass?: string
  //content?: React.ReactNode
  //children?: React.ReactNode
  className?: string
  size?: string
  offset?: number
  right?: boolean
  wide?: boolean
  button?: boolean,
  menuClass?: string
  openClass?: string
  closedClass?: string
  safeAreaClass?: string
  activeClass?: string
  selectedClass?: string
  disabledClass?: string
  optionClass?: string
  headingClass?: string
  separatorClass?: string
  triggerClass?: string
  triggerColor?: string
  triggerSize?: string
  placement?: Placement
  Trigger?: DropdownMenuTriggerType
  Content?: DropdownMenuContentType
  Body?: DropdownMenuBodyType
  Options?: DropdownMenuOptionsType
  Option?: DropdownMenuOptionType
  Heading?: DropdownMenuHeadingType
  Separator?: DropdownMenuSeparatorType,
  validOption?: IsValidOption
  displayOption?: WithIconsRenderer
  // selectOption?: (option: SelectOption) => void
  onSelect?: (value: SelectOption) => void
}

export type DropdownMenuRenderProps =
  Omit<ReturnType<typeof useTrigger>, 'triggerRef' | 'triggerProps'> &
  DropdownMenuProps & {
    dropdownMenuClass: string
    triggerRef: DropdownTriggerRef
    triggerProps: DropdownTriggerProps
    iconProps: DropdownIconProps
    bodyRef: DropdownBodyRef
    bodyStyle: DropdownBodyStyle
    bodyProps: DropdownMenuBodyProps
    safeAreaClass: string
    optionClass: string
    activeClass: string
    selectedClass: string
    disabledClass: string
    headingClass: string
    separatorClass: string
    cursor?: number | null
    setCursor: (index: number) => void
    displayOption: WithIconsRenderer
    validOption: IsValidOption
    selectOption: (option: SelectOption) => void
    selected?: SelectOption
    activeRef: (ref: HTMLElement | null) => void
    // menuRef: React.RefObject<HTMLElement>
    // floatingRef: (node: HTMLElement | null) => void
  }

export type DropdownMenuBodyProps = DropdownBodyProps
// export type DropdownMenuBodyProps = Omit<DropdownBodyProps, 'ref'>
/*
export type DropdownMenuState = MenuContextState

export type DropdownMenuActions = MenuContextActions & {
  onMouseEnter: () => void
  onMouseLeave: () => void
  onKeyDown: (event: React.KeyboardEvent) => void
  setCursor: (cursor: number | null) => void
  triggerRef: (ref: HTMLElement) => void
  activeRef: (ref: HTMLElement | null) => void
  menuRef: (ref: HTMLElement) => void
}

export type DropdownMenuTriggerProps = {
  floatingRef: (node: ReferenceType | null) => void
}
*/

export type DropdownMenuOptionProps = {
  option: SelectOption
  active: boolean
  selected: boolean
  onClick: () => void
}

export type DropdownMenuOptionsProps = {
  floatingRef: (node: HTMLElement | null) => void
  floatingStyle: React.CSSProperties
}

export type DropdownMenuHeadingProps = {
  option: SelectOptionObject,
}

export type DropdownMenuSeparatorProps = {
  option: SelectOptionObject,
}

export type DropdownMenuContentType = React.FC
export type DropdownMenuTriggerType = React.FC
export type DropdownMenuBodyType = React.FC
export type DropdownMenuOptionsType = React.FC
export type DropdownMenuOptionType = React.FC
export type DropdownMenuHeadingType = React.FC
export type DropdownMenuSeparatorType = React.FC