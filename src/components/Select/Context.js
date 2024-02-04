import MenuContext from '@/src/context/Menu.js'
import { Generator } from '@abw/react-context'
import { BLANK } from '@/src/constants.js'
import { hasValue } from '@abw/badger-utils'
import { findOption, validOption, searchOptions, defaultRenderer } from '@/src/utils/index.js'

class Context extends MenuContext {
  static debug        = false
  static debugPrefix  = 'Select > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    ...this.defaultProps,
    options:  [ ],
    search:   false,
    findOption,
    validOption,
    searchOptions,
    displayValue:  defaultRenderer('displayValue'),
    displayOption: defaultRenderer('displayOption'),
  }
  // NOTE: we don't want to reset the cursor or value when closing
  static inactiveState = {
    isOpen:         false,
    selected:       undefined,
    searchInput:    undefined,
    searchOptions:  [ ]
  }
  static initialState = {
    value:  BLANK,
    cursor: undefined,
    ...this.inactiveState
  }
  static initialProps = {
    // value: 'initialValue',
  }
  static actions = [
    'onFocus', 'onBlur', 'onClick', 'onKeyDown',
    'open', 'close', 'setCursor', 'selectCursor', 'selectOption',
    'menuRef', 'activeRef',
    'searchRef', 'focusSearch', 'blurSearch',
    'setSearch', 'clearSearch',
  ]

  constructor(props) {
    super(props)
    this.state = {
      ...this.state,
      ...this.valueState(),
      closeOnBlur: ! this.props.search,
    }
    this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.debug(`value has changed from ${prevProps.value} to ${this.props.value}`)
      this.setState(this.valueState())
    }
  }

  initialCursor() {
    return this.state.cursor
  }

  valueState(v=this.props.value) {
    const options = this.props.options
    const [value, cursor] = this.props.findOption(
      options,
      v
    )
    const input = this.inputValue(value)
    return { value, cursor, input, options }
  }

  inputValue(value=this.props.value) {
    return hasValue(value)
      ? this.props.displayValue(value)
      : null
  }

  selectState(value) {
    const input = this.inputValue(value)
    return {
      value,
      input,
      selected: value
    }
  }

  searchRef(ref) {
    this.debug('searchRef()')
    this._searchRef = ref
  }

  focusSearch(e) {
    this.debug('focusSearch()')
    e?.stopPropagation()
    this.setState({ searchFocus: true })
  }

  blurSearch() {
    this.debug('blurSearch()')
    this.setState({ searchFocus: false })
  }

  setSearch(searchInput) {
    this.setState(
      { searchInput },
      () => this.searchOptions()
    )
  }

  searchKey(key) {
    this.setSearch(
      (this.state.searchInput ?? BLANK) + key
    )
  }

  searchBackspace() {
    this.setSearch(
      (hasValue(this.state.searchInput) && this.state.searchInput.length > 1)
        ? this.state.searchInput.slice(0, -1)
        : undefined
    )
  }

  clearSearch(e) {
    e?.preventDefault()
    e?.stopPropagation()
    if (this._searchRef) {
      this.debug('re-focussing search input')
      this._searchRef.focus()
    }
    this.setSearch(undefined)
  }

  searchOptions() {
    this.debug('searchOptions()')
    const { options, searchOptions } = this.props
    this.setState(
      state => ({
        options: hasValue(state.searchInput)
          ? searchOptions(state.searchInput, this.props.options.filter(this.props.validOption))
          : options,
        cursor: 0
      })
    )
  }

  closeable(force) {
    this.debug(`closeable()  force:${force}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`)
    return force || ! (this.state.hasHover || this.state.searchFocus)
  }

  menuOptions() {
    return this.state.options
  }

}

export const SelectContext = Generator(Context)
export const {
  Provider: SelectProvider,
  Consumer: SelectConsumer,
  Use:      useSelect
} = SelectContext
export default SelectContext