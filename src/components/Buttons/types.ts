import { ButtonProps, ButtonType } from '@/components/Button/types'

export interface ButtonsProps extends ButtonProps {
  buttons?: Array<ButtonProps>,
  children?: React.ReactNode,
  className?: string,
  buttonClass?: string,
  Button?: ButtonType
}

export type ButtonsType = React.FC<ButtonsProps>