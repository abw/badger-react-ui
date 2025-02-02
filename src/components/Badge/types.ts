import { DivHTMLAttrs, MaybeTrueOrNumberString } from '@/src/types'
import { WithIconsProps, WithIconsType } from '../Icon'

export type BadgeProps = {
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
  prefixClass?: string,
  suffixClass?: string,
  Prefix?: BadgePrefixComponent,
  Suffix?: BadgeSuffixComponent,
  Content?: WithIconsType,
} & WithIconsProps
  & Omit<
      DivHTMLAttrs,
      'className' | 'name' | 'onClick' | 'ref'
    >

export type BadgePrefixProps = {
  prefix: string
  prefixClass?: string
}

export type BadgeSuffixProps = {
  suffix: string
  suffixClass?: string
}

export type BadgePrefixComponent = React.FC<BadgePrefixProps>
export type BadgeSuffixComponent = React.FC<BadgeSuffixProps>