import { OnClick } from '@/src/types'

export interface OverlayProps {
  color?: string
  className?: string
  light?: boolean
  dark?: boolean
  fixed?: boolean
  style?: React.CSSProperties
  onClick?: OnClick
  children?: React.ReactNode
}

export type OverlayType = React.FC<OverlayProps>