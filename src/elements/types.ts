import { StyleProps } from '@/src/utils/classes'
import { CSSProperties, ReactNode } from 'react'
import { MaybeTrueOrNumberString } from '../types'

export type DivProps = StyleProps & {
  style: CSSProperties
  content?: ReactNode
  children?: ReactNode
}

export type FlexProps = StyleProps & {
  children?: ReactNode
}

export type GridProps = StyleProps & {
  gap?: MaybeTrueOrNumberString
  children?: ReactNode
}


export type DivType = React.FC<DivProps>
export type FlexType = React.FC<FlexProps>
export type GridType = React.FC<GridProps>