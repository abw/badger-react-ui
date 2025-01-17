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

export type DetailsSummaryProps = WithIconsProps & {
  summary: string
  summaryClass?: string
  toggleOpen: OnClick
  detailsSummaryClass?: string
  summarySpanClass?: string
}
export type DetailsContentProps = {
  content?: string
  children?: React.ReactNode
  contentClass?: string
}

// DetailsContextRenderProps &

export type DetailsContainerProps =
  DetailsContentProps &
  Omit<DetailsSummaryProps, 'toggleOpen'> & {
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
  // isOpen?: boolean
  wideSummary?: boolean
  wideSummaryClass?: string
  // toggleOpen: OnClick
  Summary?: DetailsSummaryType,
  Content?: DetailsContentType,
}

export type DetailsNativeContainerProps =
  DetailsContainerProps & {
  open: boolean
}

export type DetailsProps = DetailsContainerProps & {
  native?: boolean
  open?: boolean
}

export type DetailsSummaryType = React.FC<DetailsSummaryProps>
export type DetailsContentType = React.FC<DetailsContentProps>
export type DetailsContainerType = React.FC<DetailsContainerProps>
export type DetailsNativeContainerType = React.FC<DetailsNativeContainerProps>
export type DetailsType = React.FC<DetailsProps>