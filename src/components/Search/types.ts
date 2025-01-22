import { RenderableValue } from '@/src/utils'
import { ContextConstructorProps, ContextProps } from '@abw/react-context'

export type SearchResult = RenderableValue & {
  id?: string | number
  value?: string | number | boolean | object
}
export type SearchResults = Array<SearchResult> | null

export type SearchProps = ContextProps<{
  onSearch: (input: string, search: React.Component) => SearchResult[] | Promise<SearchResult[]>
  value?: SearchResult
  initialValue?: string
  minLength?: number
  debounceTime?: number
  disabled?: boolean
  placeholder?: string
  searchIcon?: string
  searchingIcon?: string
  clearIcon?: string
  inputsClass?: string
  prefixClass?: string
  suffixClass?: string
  inputType?: string
  inputClass?: string
  resultsClass?: string
  resultClass?: string
  activeClass?: string
  noResults?: string
  noResultsClass?: string
  errorClass?: string
  autocomplete?: React.HTMLInputAutoCompleteAttribute
  autoComplete?: React.HTMLInputAutoCompleteAttribute
  onLoad?: SearchThisCallback
  onUnload?: SearchThisCallback
  onFocus?: () => void
  onBlur?: () => void
  onClear?: () => void
  onReset?: () => void
  onSelect?: SearchResultCallback
  displayValue?: SearchResultRender
  displayResult?: SearchResultRender
  Content?: SearchContentType
  Input?: SearchInputType
  Results?: SearchResultsType
  Result?: SearchResultType
  NoResults?: SearchNoResultsType
  Error?: SearchErrorType
}>

export type SearchState = {
  search?: string
  input?: string
  value?: SearchResult
  cursor?: number
  error?: string | null
  searching: boolean
  hasFocus?: boolean
  results?: SearchResults
  result?: unknown
}

export type SearchActions = {
  onFocus: () => void
  onBlur: () => void
  onKeyDown: React.KeyboardEventHandler
  onChange: React.ChangeEventHandler<HTMLInputElement>
  selectResult: (value: SearchResult) => void
  setCursor: (cursor: number) => void
  selectCursor: () => void
  resultsRef: (ref: HTMLDivElement) => void
  activeRef: (ref: HTMLDivElement) => void
  clear: () => void
  reset: () => void
  // Hack - this is defined in the config / replacement for defaultProps so
  // that typescript doesn't try to blag consumers into thinking it may be
  // undefined
  displayResult: SearchResultRender,
}

export type SearchResultRender = (result: SearchResult) => string

export type SearchResultProps = {
  active: boolean
  onClick: React.MouseEventHandler
  onMouseEnter: React.MouseEventHandler
}

export type SearchConstructorProps = ContextConstructorProps<
  SearchProps,
  SearchState,
  SearchActions
>

export type SearchThisCallback = (search: React.Component) => void
export type SearchResultCallback = (result: SearchResult) => void
export type SearchContentType = React.FC
export type SearchInputType = React.FC
export type SearchResultsType = React.FC
export type SearchResultType = React.FC<SearchResultProps>
export type SearchNoResultsType = React.FC
export type SearchErrorType = React.FC