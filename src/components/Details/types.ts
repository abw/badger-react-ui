import { MaybeTrueOrNumberString, OnClick } from '@/src/types'
import { WithIconsProps } from '@/components/Icon'
import { ReactNode } from 'react'

export type DetailsProps = {
  native?: boolean
  open?: boolean
} & DetailsContainerProps

export type DetailsContainerProps = {
  className?: string
  detailsClass?: string
  noIconClass?: string
  color?: string
  size?: string
  border?: MaybeTrueOrNumberString
  radius?: MaybeTrueOrNumberString
  shadow?: MaybeTrueOrNumberString
  lined?: boolean
  shaded?: boolean
  wideSummary?: boolean
  wideSummaryClass?: string
  Summary?: DetailsSummaryComponent,
  Content?: DetailsContentComponent,
} & DetailsContentProps
  & Omit<DetailsSummaryProps, 'toggleOpen'>

export type DetailsContentProps = {
  content?: ReactNode
  children?: ReactNode
  contentClass?: string
}

export type DetailsContextProps = {
  open: boolean
}

export type DetailsContextRenderProps = {
  isOpen: boolean
  toggleOpen: OnClick
  open: OnClick
  close: OnClick
}

export type DetailsSummaryProps = {
  summary: ReactNode
  summaryClass?: string
  toggleOpen: OnClick
  detailsSummaryClass?: string
  summarySpanClass?: string
} & WithIconsProps

export type DetailsNativeContainerProps = {
  open: boolean
} & DetailsContainerProps


export type DetailsSummaryComponent = React.FC<DetailsSummaryProps>
export type DetailsContentComponent = React.FC<DetailsContentProps>
