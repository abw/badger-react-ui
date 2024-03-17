import { Context, Generator } from '@abw/react-context'
import { ARROW_DOWN, ARROW_UP, BLANK, ENTER, ESCAPE } from '@/src/constants.js'
import { debounce, doNothing, hasValue, sleep } from '@abw/badger-utils'
import { defaultRenderer, scrollParentChild } from '@/src/utils/index.js'

const inactiveState = {
  searching:  false,
  search:     undefined,
  results:    undefined,
  result:     undefined,
  cursor:     undefined,
}

class SearchContext extends Context {
  static debug        = false
  static debugPrefix  = 'Search > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    minLength: 2,
    debounceTime: 500,
    // placeholder: 'Search',
    // loadingIcon: 'cog',
    // clearIcon: 'cross',
    // searchIcon: 'search',
    onLoad: doNothing,
    onUnload: doNothing,
    onFocus: doNothing,
    onBlur: doNothing,
    onReset: doNothing,
    onSelect: doNothing,
    displayValue: defaultRenderer('displayValue'),
    displayResult: defaultRenderer('displayResult'),
  }
  static initialState = {
    value: '',
    searching: false,
  }
  static initialProps = {
    value: 'initialValue',
  }
  static actions = [
    'onFocus', 'onBlur', 'onChange', 'onKeyDown',
    'reset', 'selectResult', 'setCursor', 'selectCursor',
    'resultsRef', 'activeRef',
  ]

  constructor(props) {
    super(props)
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
    this.props.onLoad(this)
  }
  componentWillUnmount() {
    this.setState({ results: null })
    this.mounted = false
    this.props.onUnload(this)
  }
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.debug(`value has changed from ${prevProps.value} to ${this.props.value}`)
      this.setState(this.valueState())
    }
  }
  valueState(value=this.props.value) {
    const input = this.inputValue(value)
    return { value, input }
  }

  inputValue(value=this.props.value) {
    return hasValue(value)
      ? this.props.displayValue(value)
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

  onChange(event) {
    const input = event.target.value
    this.debug(`input: ${input}`)
    if (input.length >= this.props.minLength) {
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

  onKeyDown(event) {
    this.debug(`onKeyDown(${event.key})`)
    const cursor = this.state.cursor

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
    this.debug(`reset() [input:${input}] from value: `, value)
    this.setState(
      {
        value,
        input,
        ...inactiveState,
      },
      this.props.onReset
    )
  }

  search() {
    const { input } = this.state
    const { minLength, onSearch } = this.props
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
      },
      async () => this.searchResults(
        await onSearch(input, this)
      )
    )
  }

  searchResults(results) {
    this.debug('searchResults()', results)
    this.setState({
      results,
      searching: false,
      cursor: 0
    })
  }

  selectResult(value) {
    this.debug(`selectResult()`, value)
    const input = this.inputValue(value)
    this.setState(
      {
        value,
        input,
        ...inactiveState
      },
      () => this.props.onSelect(value)
    )
  }

  setCursor(cursor) {
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
      this.setState({ results: null })
    }
  }

  resultsRef(ref){
    this._resultsRef = ref
  }

  activeRef(ref) {
    scrollParentChild(this._resultsRef, ref)
  }
}

export default Generator(SearchContext)