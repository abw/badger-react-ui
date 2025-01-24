import { DropdownContextState } from '@/src/context/Dropdown'
import { Placement } from '@floating-ui/react'
import { WithIconsProps } from '../Icon'
import { useTrigger, UseTriggerProps } from '@/src/hooks'
import { CSSProperties } from 'react'

export type DropdownProps =
  UseTriggerProps &
  WithIconsProps & {
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
  Trigger?: DropdownTriggerType
  Content?: DropdownContentType
  Body?: DropdownBodyType
}

export type DropdownRenderProps<
  TriggerElement extends HTMLDivElement = HTMLDivElement
> =
// export type DropdownRenderProps<T extends HTMLElement = HTMLElement> =
  Omit<ReturnType<typeof useTrigger<TriggerElement>>, 'triggerRef'> &
  DropdownProps & {
    triggerRef: React.Ref<TriggerElement>
    bodyStyle: CSSProperties,
    bodyRef: ((node: HTMLElement | null) => void)
  }

export type DropdownState =
  DropdownContextState & {
  onMouseEnter: () => void
  onMouseLeave: () => void
  onKeyDown: (event: React.KeyboardEvent) => void
  triggerRef: (ref: HTMLElement) => void
}

/*
export type DropdownBodyProps = {
  // floatingRef: (node: HTMLElement | null) => void
  // floatingStyle: React.CSSProperties
}

export type DropdownTriggerProps = {
  // floatingRef: (node: ReferenceType | null) => void
}
*/

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