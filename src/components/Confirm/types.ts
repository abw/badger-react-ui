import { ButtonProps } from '@/components/Button'
import { OnClick } from '@/src/types'

export interface ConfirmButtonsProps {
  buttonClass?: string
  cancel?: ButtonProps
  confirm?: ButtonProps,
}

export interface ConfirmModalProps extends ConfirmButtonsProps {
  isVisible?: boolean
  title?: React.ReactNode
  header?: React.ReactNode
  prompt?: React.ReactNode
  modalClass?: string
}

export interface ConfirmProps extends ConfirmButtonsProps {
  initiallyRevealed?: boolean
  open?: boolean
  confirmIcon?: string
  confirmText?: string
  confirmColor?: string
  confirmClass?: string
  cancelIcon?: string
  cancelText?: string
  cancelColor?: string
  cancelClass?: string
  confirm?: {
    iconRight?:  string
    text?:       string
    color?:      string
    className?:  string
  }
  cancel?: {
    iconLeft?:   string
    text?:       string
    color?:      string
    className?:  string
  },
  prompt?: React.ReactNode
  buttonsClass?: string
  className?: string
  modal?: boolean
  modalClass?: string
  onClick?: OnClick
}

export type ConfirmType = React.FC<ConfirmProps>
export type ConfirmModalType = React.FC<ConfirmModalProps>
export type ConfirmButtonsType = React.FC<ConfirmButtonsProps>
