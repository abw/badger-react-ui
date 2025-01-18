import { Context, Generator, WithRequiredFrom } from '@abw/react-context'
import { ARROW_DOWN, ARROW_UP, BLANK, ENTER, ESCAPE } from '@/src/constants'
import { debounce, DebounceFunction, doNothing, hasValue, sleep } from '@abw/badger-utils'
import { defaultRenderer, errorMessage, scrollParentChild } from '@/src/utils/index'
import { SearchProps, SearchState, SearchResult, SearchResults, SearchRenderProps, SearchThisCallback, SearchResultCallback, SearchActions } from './types'
import { ChangeEvent } from 'react'

const defaultProps = {
  minLength: 2,
  debounceTime: 500,
  onLoad: doNothing as SearchThisCallback,
  onUnload: doNothing as SearchThisCallback,
  onFocus: doNothing,
  onBlur: doNothing,
  onClear: doNothing,
  onReset: doNothing,
  onSelect: doNothing as SearchResultCallback,
  displayValue: defaultRenderer('displayValue'),
  displayResult: defaultRenderer('displayResult'),
}

const inactiveState = {
  searching:  false,
  search:     undefined,
  results:    undefined,
  result:     undefined,
  cursor:     undefined,
}

class SearchContext extends Context<
  SearchProps,
  SearchState,
  SearchRenderProps
> {
  static debug        = false
  static debugPrefix  = 'Search > '
  static debugColor   = 'MediumVioletRed'
  static initialState = {
    value: '',
    searching: false,
  }
  static initialProps = {
    value: 'initialValue',
  }
  static actions = [
    'onFocus', 'onBlur', 'onChange', 'onKeyDown',
    'reset', 'clear', 'selectResult', 'setCursor', 'selectCursor',
    'resultsRef', 'activeRef',
  ]

  config: WithRequiredFrom<
    SearchProps,
    typeof defaultProps
  >
  mounted?: boolean
  startSearch: DebounceFunction
  _resultsRef?: HTMLDivElement

  constructor(props: SearchProps) {
    super(props)
    this.config = {
      ...defaultProps,
      ...props
    }
    this.state = {
      ...this.state,
      ...this.valueState(),
      searching: false,
    }
    this.startSearch = props.debounceTime
      ? debounce(this.search.bind(this), props.debounceTime)
      : this.search.bind(this)
  }
  componentDidMount() {
    this.mounted = true
    this.config.onLoad(this)
  }
  componentWillUnmount() {
    this.setState({ results: null })
    this.mounted = false
    this.config.onUnload(this)
  }
  componentDidUpdate(prevProps: SearchProps) {
    if (this.props.value !== prevProps.value) {
      this.debug(`value has changed from ${prevProps.value} to ${this.props.value}`)
      this.setState(this.valueState())
    }
    this.config = {
      ...defaultProps,
      ...this.props
    }
  }
  valueState(value=this.props.value) {
    const input = this.inputValue(value)
    return { value, input }
  }

  inputValue(value=this.props.value) {
    return hasValue(value)
      ? (this.config.displayValue(value) ?? BLANK)
      : BLANK
  }

  onFocus() {
    this.debug(`onFocus()`)
    this.setState(
      { hasFocus: true },
      this.props.onFocus
    )
  }
  onBlur() {
    this.debug(`onBlur()`)
    this.setState(
      { hasFocus: false },
      this.props.onBlur
    )
    // Hack to hide result shortly after blur.  If we clear the results
    // immediately, or only display the results when the component is focussed
    // then the results disappear before an onClick has time to register.
    sleep(500).then(() => this.clearResults())
  }

  onChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value
    this.debug(`input: ${input}`)
    if (input.length >= this.config.minLength) {
      this.setState(
        { input },
        this.startSearch
      )
    }
    else {
      this.setState({
        input,
        ...inactiveState
      })
    }
  }

  onKeyDown(event: KeyboardEvent) {
    this.debug(`onKeyDown(${event.key})`)
    if (this.props.disabled) {
      return
    }

    const cursor = this.state.cursor || 0

    switch (event.key) {
      case ARROW_DOWN:
        this.setCursor(cursor + 1)
        break

      case ARROW_UP:
        this.setCursor(cursor - 1)
        break

      case ENTER:
        this.selectCursor()
        break

      case ESCAPE:
        this.reset()
        break

      default:
        return
    }
    event.preventDefault()
  }

  reset() {
    this.debug('reset()')
    const value = this.props.initialValue
    const input = this.inputValue(value)
    // this.debug(`reset() [input:${input}] from value: `, value)
    this.setState(
      {
        value,
        input,
        error: null,
        ...inactiveState,
      },
      this.props.onReset
    )
  }

  clear() {
    this.debug('clear()')
    this.setState(
      {
        value: undefined,
        error: null,
        input: BLANK,
        ...inactiveState,
      },
      this.props.onClear
    )
  }

  search() {
    const { input='' } = this.state
    const { minLength, onSearch } = this.config
    if (input.length < minLength) {
      this.debug(`search() cancelled - input is shorter than ${minLength}`)
      return
    }
    if (! onSearch) {
      this.debug(`search() cancelled - no onSearch() handler defined`)
      return
    }
    this.debug('onSearch: ', onSearch)
    this.setState(
      {
        search:    input,
        searching: true,
        error:     null,
      },
      async () => {
        try {
          this.searchResults(
            await onSearch(input, this)
          )
        }
        catch (e) {
          this.setState({
            searching: false,
            results: null,
            error: errorMessage(e)
          })
        }
      }
    )
  }

  searchResults(results: SearchResults) {
    this.debug('searchResults()', results)
    this.setState({
      results,
      searching: false,
      cursor: 0
    })
  }

  selectResult(value: SearchResult) {
    this.debug(`selectResult()`, value)
    const input = this.inputValue(value)
    this.setState(
      {
        value,
        input,
        ...inactiveState
      },
      () => this.config.onSelect(value)
    )
  }

  setCursor(cursor: number) {
    this.debug(`setCursor(${cursor})`)
    const { results } = this.state
    this.setState({
      // handle cases where cursor is less than 0 or greater than the length
      cursor: (results && results.length)
        ? (cursor + results.length) % results.length
        : undefined
    })
  }

  selectCursor() {
    const { cursor, results } = this.state
    if (results && results.length && hasValue(cursor)) {
      this.selectResult(results[cursor])
    }
  }

  clearResults() {
    if (this.mounted) {
      this.setState({
        results: null,
        error:   null
      })
    }
  }

  resultsRef(ref: HTMLDivElement){
    this._resultsRef = ref
  }

  activeRef(ref: HTMLDivElement | null) {
    if (this._resultsRef && ref) {
      scrollParentChild(this._resultsRef, ref)
    }
  }

  getRenderProps(): SearchRenderProps {
    return {
      ...this.config,
      ...this.state,
      ...this.actions as SearchActions
    }
  }
}

const generated = Generator(SearchContext)
export const useSearch = generated.Use
export default generated