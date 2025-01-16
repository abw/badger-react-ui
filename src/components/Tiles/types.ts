import { MaybeTrueOrNumberString } from '@/src/types'

export interface TilesCSSProperties extends React.CSSProperties {
  '--tile-min-width'?: string | number
}

export interface TilesProps {
  minWidth?: string | number,
  className?: string
  tilesClass?: string
  gap?: MaybeTrueOrNumberString
  style?: TilesCSSProperties
  children?: React.ReactNode
}

export type TilesType = React.FC<TilesProps>
