import { ButtonProps, ButtonComponent } from '@/components/Button/types'

export interface ButtonsProps extends ButtonProps {
  buttons?: Array<ButtonProps>,
  children?: React.ReactNode,
  className?: string,
  buttonClass?: string,
  Button?: ButtonComponent
}

export type ButtonsComponent = React.FC<ButtonsProps>