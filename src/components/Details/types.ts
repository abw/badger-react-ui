import { MaybeTrueOrNumberString, OnClick } from '@/src/types'
import { WithIconsProps } from '@/components/Icon'

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
  summary: string
  summaryClass?: string
  toggleOpen: OnClick
  detailsSummaryClass?: string
  summarySpanClass?: string
} & WithIconsProps

export type DetailsContentProps = {
  content?: string
  children?: React.ReactNode
  contentClass?: string
}

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

export type DetailsNativeContainerProps = {
  open: boolean
} & DetailsContainerProps

export type DetailsProps = {
  native?: boolean
  open?: boolean
} & DetailsContainerProps

export type DetailsSummaryComponent = React.FC<DetailsSummaryProps>
export type DetailsContentComponent = React.FC<DetailsContentProps>
// export type DetailsContainerComponent = React.FC<DetailsContainerProps>
// export type DetailsNativeContainerComponent = React.FC<DetailsNativeContainerProps>
// export type DetailsComponent = React.FC<DetailsProps>