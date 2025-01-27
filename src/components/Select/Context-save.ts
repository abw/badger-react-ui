import MenuContext, { defaultMenuContextProps } from '@/src/context/Menu'
import { ContextConstructorProps, Generator, WithRequiredFrom } from '@abw/react-context'
import { BLANK } from '@/src/constants'
import { hasValue } from '@abw/badger-utils'
import { ARROW_DOWN, ARROW_UP, TAB, ENTER, ESCAPE, SPACE, BACKSPACE } from '@/src/constants'
import { findOption, validOption, searchOptions, defaultRenderer, SelectOption, WithIconsRenderer } from '@/src/utils/index'
import { doNothing } from '@abw/badger-utils'
import { SelectActions,  SelectProps, SelectState } from './types'

export const defaultSelectProps = {
  ...defaultMenuContextProps,
  // displayOption: withIconsRenderer,
  search:   false,
  findOption,
  validOption,
  searchOptions,
  displayValue:   defaultRenderer('displayValue') as WithIconsRenderer,
  displayOption:  defaultRenderer('displayOption') as WithIconsRenderer,
  displayHeading: defaultRenderer('displayHeading') as WithIconsRenderer,
}

class Context extends MenuContext<
  SelectProps,
  SelectState,
  SelectActions
> {
  static debug        = false
  static debugPrefix  = 'Select > '
  static debugColor   = 'MediumVioletRed'

  // NOTE: we don't want to reset the cursor or value when closing
  // PROBLEM: incompatible with base class Menu
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
    'onFocus',
    'onBlur',
    'onClick',
    'onKeyDown',
    'open',
    'close',
    'setCursor',
    'selectCursor',
    'selectOption',
    'menuRef',
    'activeRef',
    'searchRef',
    'focusSearch',
    'blurSearch',
    'setSearch',
    'clearSearch',
  ]

  config: WithRequiredFrom<
    SelectProps,
    typeof defaultSelectProps
  >
  _searchRef?: HTMLElement

  constructor(
    props: ContextConstructorProps<
      SelectProps,
      SelectState,
      SelectActions
    >
  ) {
    super(props)
    this.config = {
      ...defaultSelectProps,
      ...props
    }
    this.state = {
      ...this.state,
      ...this.valueState(),
      closeOnBlur: ! this.props.search,
    }
    this.debug(`search: ${this.props.search}  closeOnBlur: ${this.state.closeOnBlur}`)
  }

  componentDidUpdate(prevProps: SelectProps) {
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
    const [value, cursor] = this.config.findOption(
      options,
      v
    )
    // v1.1.17 - getting rid of input and having the Input.jsx component
    // render it using displayValue()
    // const input = this.inputValue(value)
    // return { value, cursor, input, options }
    return { value, cursor, options }
  }

  selectState(value: SelectOption) {
    // const input = this.inputValue(value)
    return {
      value,
      // input,
      selected: value
    }
  }

  closeState() {
    return {
      ...(this.constructor as typeof Context).inactiveState,
      options: this.props.options
    }
  }

  onKeyDown(event: React.KeyboardEvent) {
    this.debug(`onKeyDown(${event.key})`)
    if (this.props.disabled) {
      return
    }

    switch (event.key) {
      case ARROW_DOWN:
        if (this.state.isOpen) {
          this.setCursor(this.cursorNextIndex())
        }
        else {
          this.open(this.initialCursor() ?? this.cursorFirstIndex())
        }
        break

      case ARROW_UP:
        if (this.state.isOpen) {
          this.setCursor(this.cursorPrevIndex())
        }
        else {
          this.open(this.initialCursor() ?? this.cursorLastIndex())
        }
        break

      case ENTER:
        if (this.state.isOpen) {
          this.selectCursor()
        }
        else {
          this.open(this.initialCursor() ??  this.cursorFirstIndex())
        }
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
        break

      // @ts-expect-error - we really do want a fall-through here
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
          if (! this.state.isOpen) {
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

  searchRef(ref: HTMLElement) {
    this.debug('searchRef()')
    this._searchRef = ref
  }

  focusSearch(e: React.FocusEvent) {
    this.debug('focusSearch()')
    e?.stopPropagation()
    this.setState({ searchFocus: true })
  }

  //React.FocusEventHandler<HTMLInputElement>

  blurSearch() {
    this.debug('blurSearch()')
    this.setState({ searchFocus: false })
    this.closeSoon()
  }

  setSearch(searchInput: string | undefined) {
    this.setState(
      { searchInput },
      () => this.searchOptions()
    )
  }

  searchKey(key?: string) {
    this.setSearch(
      (this.state.searchInput ?? BLANK) + key
    )
  }

  searchBackspace() {
    const searchInput = this.state.searchInput
    this.setSearch(
      (hasValue(searchInput) && searchInput.length > 1)
        ? searchInput.slice(0, -1)
        : undefined
    )
  }

  clearSearch(e: React.MouseEvent) {
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
    const { options, searchOptions } = this.config
    this.setState(
      state => ({
        options: hasValue(state.searchInput)
          ? searchOptions(state.searchInput, this.config.options.filter(this.config.validOption))
          : options,
        cursor: 0
      })
    )
  }

  closeable(force?: boolean) {
    this.debug(`closeable()  force:${force}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`)
    return force || ! (this.state.hasHover || this.state.searchFocus)
  }

  menuOptions() {
    // return this.state.options
    return this.state.options || [ ]
  }

  getRenderProps() {
    return {
      ...this.config,
      ...this.state,
      ...this.actions
    }
  }
}

export const SelectContext = Generator(Context)
export const {
  Provider: SelectProvider,
  Consumer: SelectConsumer,
  Use:      useSelect
} = SelectContext
export default SelectContext