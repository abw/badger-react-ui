import { WithIconsProps, WithIconsType } from '@/components/Icon'
import { MaybeTrueOrNumberString } from '@/src/types'

export type ButtonHTMLAttrs = React.ComponentPropsWithoutRef<'button'>
export type ButtonProps = {
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
} & WithIconsProps
  & Omit<ButtonHTMLAttrs, 'className'>

export type ButtonComponent = React.FC<ButtonProps>