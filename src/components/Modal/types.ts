import { OnClick } from '@/src/types'
import { ReactNode } from 'react'

export type ModalProps = {
  open?: boolean
  close?: () => void
  className?: string
  closeClass?: string
  closeIcon?: string
  Close?: ModalCloseComponent
  Content?: ModalContentComponent
  closeOnClick?: boolean
  onClick?: OnClick
  onCancel?: OnClick,
  title?: ReactNode
  header?: ReactNode
  footer?: ReactNode
  text?: ReactNode
  children?: ReactNode
  maxWidth?: number | string
  maxHeight?: number | string
  style?: ModalCSSProperties
  ref?: React.Ref<HTMLDialogElement>
}

export type ModalCloseProps = {
  close?: OnClick
  icon?: string,
  className?: string
}

export type ModalHeaderProps = {
  title?: ReactNode
  header?: ReactNode
}

export type ModalFooterProps = {
  footer?: ReactNode
}

export type ModalContentProps = {
  text?: ReactNode
  children?: ReactNode
  Header?: ModalHeaderComponent
  Footer?: ModalFooterComponent
} & ModalHeaderProps
  & ModalFooterProps


export type ModalCSSProperties = {
  '--max-width'?: string | number
  '--max-height'?: string | number
} & React.CSSProperties

export type ModalCloseComponent = React.FC<ModalCloseProps>
export type ModalHeaderComponent = React.FC<ModalHeaderProps>
export type ModalFooterComponent = React.FC<ModalFooterProps>
export type ModalContentComponent = React.FC<ModalContentProps>
export type ModalComponent = React.FC<ModalProps>