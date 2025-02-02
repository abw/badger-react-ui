// import { PropsObject } from '@/src/types'
import { SizeColorProps } from '@/src/utils'
import { ReactNode } from 'react'

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

export type WithIconsProps = {
  icon?: string
  iconClass?: string
  iconLeft?: string | false
  iconLeftClass?: string
  iconLeftRotate?: number
  iconRight?: string | false
  iconRightClass?: string
  iconRightRotate?: number
  spanText?: boolean
  spanClass?: string
  text?: ReactNode
  children?: React.ReactNode | undefined
}

export type WithIconsType = React.FC<WithIconsProps>