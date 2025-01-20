import { MenuContextActions, MenuContextProps, MenuContextState } from '@/src/context/Menu'
import { WithIconsProps } from '../Icon'
import { Placement, ReferenceType } from '@floating-ui/react'
import { SelectOption, SelectOptionObject, WithIconsRenderer } from '@/src/utils'

export type DropdownMenuProps = MenuContextProps & WithIconsProps & {
  bodyClass?: string
  content?: React.ReactNode
  children?: React.ReactNode
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

  // triggerRef,
  displayOption: WithIconsRenderer
  selectOption: (option: SelectOption) => void
  Trigger?: DropdownMenuTriggerType
  Content?: DropdownMenuContentType
  Body?: DropdownMenuBodyType
  Options?: DropdownMenuOptionsType
  Option?: DropdownMenuOptionType
  Heading?: DropdownMenuHeadingType
  Separator?: DropdownMenuSeparatorType,
}

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

export type DropdownMenuOptionProps = {
  option: SelectOption,
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