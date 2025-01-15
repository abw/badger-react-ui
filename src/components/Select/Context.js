import MenuContext from '@/src/context/Menu.js'
import { Generator } from '@abw/react-context'
import { BLANK } from '@/src/constants'
import { hasValue } from '@abw/badger-utils'
import { ARROW_DOWN, ARROW_UP, TAB, ENTER, ESCAPE, SPACE, BACKSPACE } from '@/src/constants'
import { findOption, validOption, searchOptions, defaultRenderer } from '@/src/utils/index'
import { doNothing } from '@abw/badger-utils'

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
    displayValue:   defaultRenderer('displayValue'),
    displayOption:  defaultRenderer('displayOption'),
    displayHeading: defaultRenderer('displayHeading'),
  }
  // NOTE: we don't want to reset the cursor or value when closing
  static inactiveState = {
    isOpen:         false,
    selected:       undefined,
    searchInput:    undefined,
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
    let newState
    if (this.props.options !== prevProps.options) {
      this.debug(`options have changed, current value is`, this.state.value)
      newState = this.valueState(this.state.value)
    }
    if (this.props.value !== prevProps.value) {
      this.debug(`value has changed from ${prevProps.value} to ${this.props.value}`)
      newState = this.valueState()
    }
    // It can be useful to distinguish between cases where a user has selected
    // an option (the regular onSelect) and cases where the state has changed
    // because the options or pre-selected value have changed (the new
    // onUpdate).  If there is no onUpdate defined then we fall back to
    // onSelect so that we don't break any code.  Note that we only do this
    // if the newState contains a value
    if (newState) {
      const changer = hasValue(newState.value)
        ? (this.props.onUpdate || this.props.onSelect)
        : doNothing
      this.setState(
        newState,
        () => changer(newState.value)
      )
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
    // v1.1.17 - getting rid of input and having the Input.jsx component
    // render it using displayValue()
    // const input = this.inputValue(value)
    // return { value, cursor, input, options }
    return { value, cursor, options }
  }

  selectState(value) {
    // const input = this.inputValue(value)
    return {
      value,
      // input,
      selected: value
    }
  }

  closeState() {
    return {
      ...this.constructor.inactiveState,
      options: this.props.options
    }
  }

  onKeyDown(event) {
    this.debug(`onKeyDown(${event.key})`)
    if (this.props.disabled) {
      return
    }

    switch (event.key) {
      case ARROW_DOWN:
        this.state.isOpen
          ? this.setCursor(this.cursorNextIndex())
          : this.open(this.initialCursor() ?? this.cursorFirstIndex())
        break

      case ARROW_UP:
        this.state.isOpen
          ? this.setCursor(this.cursorPrevIndex())
          : this.open(this.initialCursor() ?? this.cursorLastIndex())
        break

      case ENTER:
        this.state.isOpen
          ? this.selectCursor()
          : this.open(this.initialCursor() ??  this.cursorFirstIndex())
        break

      case ESCAPE:
        this.close()
        break

      case BACKSPACE:
        this.debug('backspace')
        this.searchBackspace()
        break

      case TAB:
        return

      case SPACE:
        if (! this.state.isOpen) {
          this.debug('space to open')
          this.open(this.cursorFirstIndex())
          break
        }
        else if (! (this.state.searchInput ?? BLANK).length) {
          break
        }
        // drop-through

      // eslint-disable-next-line no-fallthrough
      default:
        this.debug('default keypress')
        if (event.altKey || event.ctrlKey || event.metaKey) {
          return
        }
        if (event.key.length === 1) {
          this.debug(`typed key ${event.key}`)
          this.searchKey(event.key)
          if (! this.state.open) {
            this.open()
          }
          if (this._searchRef) {
            this._searchRef.focus()
          }
          break
        }
        this.debug(`ignored key ${event.key}`)
        return
    }
    event.preventDefault()
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
    this.closeSoon()
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
    this.debug('searchOptions(), searchInput: ', this.state.searchInput)
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