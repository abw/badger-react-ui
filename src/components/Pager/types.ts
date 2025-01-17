import { OnClick } from '@/src/types'

export type PagerLabeller = (n?: number) => string

export type PagerContextProps = {
  pages: number
  setPage: (n: number) => void,
  page?: number
  className?: string
  size?: string
  color?: string
  label?: string
  buttonClass?: string
  prevClass?: string
  prevIcon?: string
  prevLabel?: PagerLabeller
  nextClass?: string
  nextIcon?: string
  nextLabel?: PagerLabeller
  pageClass?: string
  pageLabel?: PagerLabeller
  pagesClass?: string
  showFirstLast?: boolean
  currentPageClass?: string
  pageSeparatorClass?: string
  pageSeparator?: React.ReactNode
  Page?: PagerPageType
  Pages?: PagerPagesType
  Separator?: PagerSeparatorType
  Previous?: PagerPreviousType
  Next?: PagerNextType
}

export type PagerPageProps = {
  text?: string
  className?: string
  current?: boolean
  disabled?: boolean
  onClick?: OnClick
}

/*
export type PagerSeparatorProps = {
  pageSeparatorClass?: string
  pageSeparator?: string
}

export type PagerLabelProps = {
  pageSeparatorClass?: string
  pageSeparator?: string
}
*/

export type PagerContextRenderProps = PagerContextProps & {
  firstPage: number
  firstPageNo: number
  lastPage: number
  lastPageNo: number
  pageNo: number | null
  prevPage: number | null
  prevPageNo: number | null
  nextPage: number | null
  nextPageNo: number | null
}

// export type PagerPageType = React.FC<PagerPageProps>
// export type PagerSeparatorType = React.FC<PagerSeparatorProps>
export type PagerPageType = React.FC
export type PagerSeparatorType = React.FC
export type PagerPagesType = React.FC
export type PagerPreviousType = React.FC
export type PagerNextType = React.FC
