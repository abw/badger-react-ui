import { RenderableValue } from '@/src/utils'

export type SearchResult = RenderableValue & {
  id?: string | number
  value?: string | number | boolean | object
}
export type SearchResults = Array<SearchResult> | null

export type SearchProps = {
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
  displayValue?: (result: SearchResult) => string
  displayResult?: (result: SearchResult) => string
  Content?: SearchContentType
  Input?: SearchInputType
  Results?: SearchResultsType
  Result?: SearchResultType
  NoResults?: SearchNoResultsType
  Error?: SearchErrorType
}
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
  onClick: React.MouseEventHandler<HTMLDivElement>
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>
  onChange: React.ChangeEventHandler<HTMLInputElement>
  selectResult: (value: SearchResult) => void
  setCursor: (cursor: number) => void
  selectCursor: () => void
  resultsRef: (ref: HTMLDivElement) => void
  activeRef: (ref: HTMLDivElement) => void
  clear: () => void
  reset: () => void
}

export type SearchRenderProps =
  SearchProps &
  SearchState &
  SearchActions

export type SearchResultProps = {
  active: boolean
}

export type SearchThisCallback = (search: React.Component) => void
export type SearchResultCallback = (result: SearchResult) => void
export type SearchContentType = React.FC
export type SearchInputType = React.FC
export type SearchResultsType = React.FC
export type SearchResultType = React.FC<SearchResultProps>
export type SearchNoResultsType = React.FC
export type SearchErrorType = React.FC