// import { DropdownContextState } from '@/src/context/Dropdown'
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
  noContent?: string
  Trigger?: DropdownTriggerType
  Content?: DropdownContentType
  Body?: DropdownBodyType
}

export type DropdownTriggerRef = (trigger: Element | null) => void
export type DropdownBodyRef = (body: HTMLElement | null) => void
export type DropdownBodyStyle = CSSProperties
export type DropdownBodyProps = {
  className: string
  ref: DropdownBodyRef,
  style: DropdownBodyStyle,
  onMouseEnter: () => void,
  onMouseLeave: () => void,
}
export type DropdownTriggerProps =
  Omit<ReturnType<typeof useTrigger>['triggerProps'], 'ref'> & {
  className: string,
  ref: DropdownTriggerRef
  tabIndex: number
}
export type DropdownIconProps = WithIconsProps

export type DropdownRenderProps =
  Omit<ReturnType<typeof useTrigger>, 'triggerRef' | 'triggerProps'> &
  DropdownProps & {
    dropdownClass: string
    triggerRef: DropdownTriggerRef
    triggerProps: DropdownTriggerProps
    bodyRef: DropdownBodyRef
    bodyStyle: DropdownBodyStyle
    bodyProps: DropdownBodyProps
    safeAreaClass: string,
    iconProps: DropdownIconProps
  }

export type DropdownContentType = React.FC
export type DropdownTriggerType = React.FC
export type DropdownBodyType = React.FC