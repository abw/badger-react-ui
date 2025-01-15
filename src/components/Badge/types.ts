import { MaybeTrueOrNumberString } from '@/src/types'
import { WithIconsProps, WithIconsType } from '../Icon'

export interface BadgePrefixProps {
  prefix: string
  prefixClass?: string
}

export interface BadgeSuffixProps {
  suffix: string
  suffixClass?: string
}

export interface BadgeProps extends
  WithIconsProps,
  Omit<
    React.ComponentProps<'div'>,
    'className' | 'name' | 'onClick' | 'ref'
  > {
  size?: string,
  color?: string,
  compact?: boolean,
  className?: string,
  tag?: boolean,
  shadow?: MaybeTrueOrNumberString,
  border?: MaybeTrueOrNumberString,
  radius?: MaybeTrueOrNumberString,
  tooltip?: string,
  label?: string,
  prefix?: string,
  suffix?: string,
  Prefix: BadgePrefixType,
  Suffix: BadgeSuffixType,
  Content: WithIconsType,
  //text,
  //children,
}

export type BadgeType = React.FC<BadgeProps>
export type BadgePrefixType = React.FC<BadgePrefixProps>
export type BadgeSuffixType = React.FC<BadgeSuffixProps>