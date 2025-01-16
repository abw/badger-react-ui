import { OnClick } from '@/src/types'

export interface ModalCloseProps {
  close?: OnClick
  icon?: string,
  className?: string
}

export interface ModalHeaderProps {
  title?: React.ReactNode
  header?: React.ReactNode
}

export interface ModalFooterProps {
  footer?: React.ReactNode
}

export interface ModalContentProps extends ModalHeaderProps, ModalFooterProps {
  text?: string
  children?: React.ReactNode
  Header?: ModalHeaderType
  Footer?: ModalFooterType
}

export interface ModalProps {
  open?: boolean
  close?: () => void
  className?: string
  closeClass?: string
  closeIcon?: string
  Close?: ModalCloseType
  Content?: ModalContentType
  closeOnClick?: boolean
  onClick?: OnClick
  onCancel?: OnClick,
  // onClick?: React.MouseEventHandler<HTMLDialogElement>
  // onCancel?: React.ReactEventHandler<HTMLDialogElement>
  maxWidth?: number | string
  maxHeight?: number | string
  style?: ModalCSSProperties
  ref?: React.Ref<HTMLDialogElement>
}

export interface ModalCSSProperties extends React.CSSProperties {
  '--max-width'?: string | number
  '--max-height'?: string | number
}

export type ModalCloseType = React.FC<ModalCloseProps>
export type ModalHeaderType = React.FC<ModalHeaderProps>
export type ModalFooterType = React.FC<ModalFooterProps>
export type ModalContentType = React.FC<ModalContentProps>
export type ModalType = React.FC<ModalProps>