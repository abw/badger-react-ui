import { ButtonProps } from '@/components/Button'
import { OnClick } from '@/src/types'
import { ReactNode } from 'react'

export type ConfirmProps = {
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
  text?: string,
  color?: string
  icon?: string
  iconRight?: string
  iconLeft?: string
  title?: ReactNode
  header?: ReactNode
  prompt?: ReactNode
  buttonsClass?: string
  className?: string
  modal?: boolean
  modalClass?: string
  onClick?: OnClick
} & ConfirmButtonsProps

export type ConfirmButtonsProps = {
  buttonClass?: string
  cancel?: ButtonProps
  confirm?: ButtonProps,
}

export type ConfirmModalProps = {
  isVisible?: boolean
  title?: ReactNode
  header?: ReactNode
  prompt?: ReactNode
  modalClass?: string
} & ConfirmButtonsProps

export type ConfirmComponent = React.FC<ConfirmProps>
export type ConfirmModalComponent = React.FC<ConfirmModalProps>
export type ConfirmButtonsComponent = React.FC<ConfirmButtonsProps>
