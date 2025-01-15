import { SizeColorProps } from '@/src/utils'

export interface IconProps extends SizeColorProps {
  name: string,
  path?: string,
  type?: string,
  style?: string | object,
  transform?: string | object,
  fixedWidth?: boolean,
  onClick?: (e: MouseEvent) => void
}

// export interface IconsProps extends Omit<IconProps, 'name'> {
export interface IconsProps extends IconProps {
  names: string,
}
//export type IconsProps = IconProps & {
//  names: string,
//}

export interface WithIconProps extends IconProps {
  icon?: string,
  iconLeft?: string,
  iconRight?: string,
  spanText?: boolean,
  spanClass?: string,
  text?: string,
  children?: React.ReactNode | undefined
}
