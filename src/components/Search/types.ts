import { OnClick } from '@/src/types'
import { RenderableValue } from '@/src/utils'

export type SearchResult = RenderableValue & {
  id?: string | number
  value?: string | number | boolean | object
}
export type SearchResults = Array<SearchResult> | null

// NOTE: most of these are optional when invoking the component
// as they're filled in by defaultProps, but they have to be marked
// as mandatory (i.e. no '?') to keep Typescript from whining
export type SearchProps = {
  value?: SearchResult
  initialValue?: string
  minLength: number
  debounceTime: number
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
  displayValue: (v: SearchResult) => string
  displayResult: (v: SearchResult) => string
  onLoad: (search: React.Component) => void
  onUnload: (search: React.Component) => void
  onSearch: (input: string, search: React.Component) => Promise<SearchResult[]>
  onSelect: (result: SearchResult) => void
  onFocus: () => void
  onBlur: () => void
  onClear: () => void
  onReset: () => void
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

export type SearchRenderProps =
  SearchProps &
  SearchState & {
    onClick: React.MouseEventHandler<HTMLDivElement>
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>
    onKeyDown: React.KeyboardEventHandler<HTMLDivElement>
    onChange: React.ChangeEventHandler<HTMLInputElement>
    selectResult: (value: SearchResult) => void
    setCursor: (cursor: number) => void
    resultsRef: (ref: HTMLDivElement) => void
    activeRef: (ref: HTMLDivElement) => void
    clear: OnClick
  }

//  static actions = [
//    'onFocus', 'onBlur',
//    'onKeyDown',
//    'reset',
//    'selectCursor',
//  ]


export type SearchResultProps = {
  active: boolean
}

export type SearchContentType = React.FC
export type SearchInputType = React.FC
export type SearchResultsType = React.FC
export type SearchResultType = React.FC<SearchResultProps>
export type SearchNoResultsType = React.FC
export type SearchErrorType = React.FC