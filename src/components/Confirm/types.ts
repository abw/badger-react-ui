import { ButtonProps } from '@/components/Button'
import { OnClick } from '@/src/types'

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
  prompt?: React.ReactNode
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
  title?: React.ReactNode
  header?: React.ReactNode
  prompt?: React.ReactNode
  modalClass?: string
} & ConfirmButtonsProps

export type ConfirmComponent = React.FC<ConfirmProps>
export type ConfirmModalComponent = React.FC<ConfirmModalProps>
export type ConfirmButtonsComponent = React.FC<ConfirmButtonsProps>
