import { WithIconsProps, WithIconsType } from '@/components/Icon'
import { MaybeTrueOrNumberString } from '@/src/types'

export interface ButtonProps extends
  WithIconsProps,
  Omit<
    React.ComponentPropsWithoutRef<'button'>,
    'className'
  > {
  size?: string,
  color?: string,
  className?: string,
  disabled?: boolean,
  bright?: boolean,
  dark?: boolean,
  outline?: boolean,
  bare?: boolean,
  shaded?: boolean,
  shadow?: MaybeTrueOrNumberString,
  border?: MaybeTrueOrNumberString,
  radius?: MaybeTrueOrNumberString,
  label?: string,
  tabIndex?: number,
  tooltip?: string,
  Content?: WithIconsType,
}

export type ButtonType = React.FC<ButtonProps>