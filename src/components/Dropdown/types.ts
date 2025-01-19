import { DropdownContextProps, DropdownContextState } from '@/src/context/Dropdown'
import { Placement, ReferenceType } from '@floating-ui/react'
import { WithIconsProps } from '../Icon'

export type DropdownProps = DropdownContextProps & WithIconsProps & {
  bodyClass?: string
  content?: React.ReactNode
  children?: React.ReactNode
  className?: string
  size?: string
  openClass?: string
  closedClass?: string
  safeAreaClass?: string
  offset?: number
  right?: boolean
  wide?: boolean
  button?: boolean,
  placement?: Placement
  triggerClass?: string
  triggerColor?: string
  triggerSize?: string
  // triggerRef,
  Trigger?: DropdownTriggerType
  Content?: DropdownContentType
  Body?: DropdownBodyType
  //isOpen,
  //Trigger=DropdownTrigger,
  //Body=DropdownBody

  // onMouseEnter,
  // onMouseLeave,
  // floatingRef,
  // floatingStyle,
  // content,
}

export type DropdownState = DropdownContextState & {
  onMouseEnter: () => void
  onMouseLeave: () => void
  onKeyDown: (event: React.KeyboardEvent) => void
  triggerRef: (ref: HTMLElement) => void
}

export type DropdownBodyProps = {
  floatingRef: (node: HTMLElement | null) => void
  floatingStyle: React.CSSProperties
}

export type DropdownTriggerProps = {
  floatingRef: (node: ReferenceType | null) => void
}

/*
export type DropdownContextProps = {
  // options: DropdownContextOption[]
  openOnHover?: boolean
  closeOnBlue?: boolean
  closeDelay?: number
  onLoad?: ThisCallback
  onUnload?: ThisCallback
  onFocus?: () => void
  onBlur?: () => void
  onClick?: () => void
  onOpen?: () => void
  onClose?: () => void
}
*/

export type DropdownContentType = React.FC
export type DropdownTriggerType = React.FC
export type DropdownBodyType = React.FC