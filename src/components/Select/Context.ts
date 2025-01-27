import { Model } from '@abw/react-context'
// import MenuContext, { defaultMenuContextProps } from '@/src/context/Menu'
// import { ContextConstructorProps, Generator, Model, WithRequiredFrom } from '@abw/react-context'
//import { BLANK } from '@/src/constants'
//import { hasValue } from '@abw/badger-utils'
//import { ARROW_DOWN, ARROW_UP, TAB, ENTER, ESCAPE, SPACE, BACKSPACE } from '@/src/constants'
//import { findOption, validOption, searchOptions, defaultRenderer, SelectOption, WithIconsRenderer } from '@/src/utils/index'
//import { doNothing } from '@abw/badger-utils'
// import { SelectActions,  SelectProps, SelectRenderProps, SelectState } from './types'
import { SelectProps, SelectRenderProps } from './types'
import { SELECT_CLASS, SELECT_PLACEHOLDER, SELECT_SEARCH_FIELD_CLASS, SELECT_SEARCH_PLACEHOLDER, SELECT_SEARCH_PREFIX_CLASS, SELECT_SEARCH_SUFFIX_CLASS, SELECT_SUFFIX_ICON } from './Constants'
import { ACTIVE_CLASS, ARROW_DOWN, ARROW_UP, BACKSPACE, BLANK, CLEAR_CLASS, CLEAR_ICON, CLOSED_CLASS, DISABLED_CLASS, ENTER, ESCAPE, HEADING_CLASS, INPUT_CLASS, INPUTS_CLASS, MENU_CLASS, NO_OPTIONS, NONE_CLASS, OPEN_CLASS, OPTION_CLASS, PLACEHOLDER_CLASS, SEARCH_ICON, SELECTED_CLASS, SEPARATOR_CLASS, SPACE, SUFFIX_CLASS, TAB } from '@/src/constants'
import { useCursor, useTrigger } from '@/src/hooks'
import {
  // withIconsRenderer,
  validOption as defaultValidOption,
  findOption as defaultFindOption,
  debugFunction, SelectOption, defaultRenderer, WithIconsRenderer,
  scrollParentChild} from '@/src/utils'
import { useCallback, useRef, useState } from 'react'
import { hasValue } from '@abw/badger-utils'

export const SelectContext = Model<SelectProps, SelectRenderProps>(
  ({
    options,
    className,
    closeOnSelect     = true,
    search            = false,
    closeOnBlur       =  ! search,
    selectClass       = SELECT_CLASS,
    placeholder       = SELECT_PLACEHOLDER,
    placeholderClass  = PLACEHOLDER_CLASS,
    suffixClass       = SUFFIX_CLASS,
    suffixIcon        = SELECT_SUFFIX_ICON,
    inputsClass       = INPUTS_CLASS,
    inputClass        = INPUT_CLASS,
    // triggerClass   = DROPDOWN_TRIGGER_CLASS,
    // bodyClass      = DROPDOWN_MENU_BODY_CLASS,
    menuClass         = MENU_CLASS,
    openClass         = OPEN_CLASS,
    closedClass       = CLOSED_CLASS,
    optionClass       = OPTION_CLASS,
    noOptions         = NO_OPTIONS,
    noOptionsClass    = NONE_CLASS,
    activeClass       = ACTIVE_CLASS,
    selectedClass     = SELECTED_CLASS,
    disabledClass     = DISABLED_CLASS,
    headingClass      = HEADING_CLASS,
    separatorClass    = SEPARATOR_CLASS,
    // search
    searchPlaceholder = SELECT_SEARCH_PLACEHOLDER,
    searchFieldClass  = SELECT_SEARCH_FIELD_CLASS,
    searchInputsClass = INPUTS_CLASS,
    searchPrefixClass = SELECT_SEARCH_PREFIX_CLASS,
    searchSuffixClass = SELECT_SEARCH_SUFFIX_CLASS,
    searchClearClass  = CLEAR_CLASS,
    searchIcon        = SEARCH_ICON,
    clearSearchIcon   = CLEAR_ICON,

    //displayOption   = withIconsRenderer,
    //displayValue    = withIconsRenderer,
    //displayHeading  = withIconsRenderer,
    displayValue      = defaultRenderer('displayValue') as WithIconsRenderer,
    displayOption     = defaultRenderer('displayOption') as WithIconsRenderer,
    displayHeading    = defaultRenderer('displayHeading') as WithIconsRenderer,
    findOption        = defaultFindOption,
    validOption       = defaultValidOption,
    onSelect,
    debugPrefix    = 'Select > ',
    ...props

    // TODO
    // onClick
    // onFocus    // should be handled by useTrigger
    // onBlur     // should be handled by useTrigger
  }) => {
    // debugging function
    const debug = debugFunction({
      ...props,
      debugPrefix
    })

    // cursor hook
    const {
      cursor,
      setCursorIndex: setCursor,
      setCursorFirst,
      setCursorNext,
      setCursorPrev,
      setCursorLast,
    } = useCursor({
      ...props,
      options,
      validOption,
      debugPrefix
    })

    // trigger hook
    const {
      triggerRef,
      onMouseEnter,
      onMouseLeave,
      ...trigger
    } = useTrigger({
      ...props,
      closeOnBlur,
      debugPrefix,
      onOpen: () => {
        clearSelected()
        if (! cursor) {
          setCursorFirst()
        }
        // TODO: props.onOpen()
        if (props.onOpen) {
          props.onOpen()
        }
        console.log(`select is open`)
      }
    })

    // search
    const [searchInput, setSearchInput] = useState<string|undefined>(undefined)
    const [searchFocus, setSearchFocus] = useState<boolean>(false)
    const searchRef = useRef<HTMLInputElement>(null)

    const focusSearch = (e?: React.FocusEvent) => {
      debug('focusSearch()')
      e?.stopPropagation()
      setSearchFocus(true)
    }
    const blurSearch = () => {
      debug('blurSearch()')
      setSearchFocus(false)
      trigger.closeSoon()
    }

    const searchOptions = () => {
      debug('TODO: searchOptions')
    }

    const setSearch = (searchInput: string | undefined) => {
      setSearchInput(searchInput)
      searchOptions()
    }
    const searchKey = (key?: string) => {
      setSearch(
        (searchInput ?? BLANK) + key
      )
    }
    const searchBackspace = () => {
      debug(`searchBackspace()`)
      setSearch(
        (hasValue(searchInput) && searchInput.length > 1)
          ? searchInput.slice(0, -1)
          : undefined
      )
    }
    const clearSearch = (e?: React.MouseEvent) => {
      e?.preventDefault()
      e?.stopPropagation()
      if (searchRef.current) {
        debug('re-focussing search input')
        searchRef.current.focus()
      }
      setSearch(undefined)
    }

    // selected item
    const [selected, setSelected] = useState<SelectOption|undefined>(undefined)
    const clearSelected = () => setSelected(undefined)

    // selected value displayed in input
    // NOTE that we keep this separate from selected because we don't want to
    // clear the currently selected value from the input when we re-open the
    // select, but we DO want to clear the selected value so it doesn't remain
    // highlighted in the menu
    const [value, setValue] = useState<SelectOption|undefined>(undefined)

    const selectCursor = () => {
      if (options && options.length && hasValue(cursor)) {
        const option = options[cursor]
        debug(`selectCursor() ${cursor} =>`, option)
        selectOption(option)
      }
    }

    const selectOption = (option: SelectOption) => {
      debug(`selectOption()`, option)
      setSelected(option)
      setValue(option)
      if (onSelect) {
        onSelect(option)
      }
      /*
      this.setState(
        // TODO: this needs to be abstracted out
        // For select it also aliases selected to value:
        return {
          value,
          selected: value
        }
      }
      */
      if (closeOnSelect) {
        debug(`closeOnSelect is set, closing`)
        trigger.closeSoon(true)
      }
      else {
        debug(`closeOnSelect is not set, NOT closing`)
      }
    }


    // Custom key handler to replace the one from useTrigger().  It has to
    // replicate the functionality of it but with extra bells and whistles
    const onKeyDown = (event: React.KeyboardEvent) => {
      debug(`onKeyDown(${event.key})`)
      if (props.disabled) {
        return
      }

      switch (event.key) {
        case ARROW_DOWN:
          if (trigger.isOpen) {
            debug('DOWN and open: select next')
            setCursorNext()
          }
          else {
            debug('DOWN and closed: open and select first')
            trigger.open()
            if (! cursor) {
              setCursorFirst()
            }
          }
          break

        case ARROW_UP:
          if (trigger.isOpen) {
            debug('UP and open: select previous')
            setCursorPrev()
          }
          else {
            debug('UP and closed: open and select last')
            trigger.open()
            if (! cursor) {
              setCursorLast()
            }
          }
          break

        case ENTER:
        // case SPACE:
          if (trigger.isOpen) {
            debug('ENTER and open: select current item')
            selectCursor()
          }
          else {
            debug('ENTER/SPACE and closed: open and select first')
            trigger.open()
            if (! cursor) {
              setCursorFirst()
            }
          }
          break

        case ESCAPE:
          debug('ESCAPE: close')
          trigger.close()
          break

        case BACKSPACE:
          debug('BACKSPACE: backspace in search')
          searchBackspace()
          break

        case TAB:
          debug('TAB: tab away')
          return

        // @ts-expect-error - we really do want a fall-through here
        case SPACE:
          if (! trigger.isOpen) {
            debug('SPACE and closed: open')
            trigger.open()
            if (! cursor) {
              setCursorFirst()
            }
            break
          }
          else if (! (searchInput ?? BLANK).length) {
            break
          }
          // drop-through

        // eslint-disable-next-line no-fallthrough
        default:
          // TODO: should this test for search being enabled?
          debug('default keypress')
          if (event.altKey || event.ctrlKey || event.metaKey) {
            return
          }
          if (event.key.length === 1) {
            debug(`typed key ${event.key}`)
            searchKey(event.key)
            if (! trigger.isOpen) {
              trigger.open()
            }
            if (searchRef.current) {
              searchRef.current.focus()
            }
            break
          }
          debug(`ignored key ${event.key}`)
          return
      }
      event.preventDefault()
    }

    // handler for active item - scrolls the parent menu container until the
    // active item is in view
    const menuRef = useRef<HTMLDivElement>(null)
    const activeRef = useCallback(
      (ref: HTMLElement | null) => {
        if (ref && menuRef.current) {
          debug('scrolling active item into view')
          scrollParentChild(menuRef.current, ref)
        }
      },
      [menuRef, debug]
    )


    return {
      ...props,
      ...trigger,
      options,
      triggerRef,
      menuRef,
      activeRef,
      searchRef,
      cursor,
      setCursor,

      className,
      selectClass,
      // triggerClass   = DROPDOWN_TRIGGER_CLASS,
      // bodyClass      = DROPDOWN_MENU_BODY_CLASS,

      inputsClass,
      inputClass,
      suffixIcon,
      suffixClass,
      menuClass,
      placeholder,
      placeholderClass,
      // safeAreaClass,
      openClass,
      closedClass,
      optionClass,
      noOptions,
      noOptionsClass,
      activeClass,
      selectedClass,
      disabledClass,
      headingClass,
      separatorClass,

      // search
      search,
      searchPlaceholder,
      searchFieldClass,
      searchInputsClass,
      searchPrefixClass,
      searchSuffixClass,
      searchClearClass,
      searchIcon,
      clearSearchIcon,

      findOption,
      validOption,
      displayOption,
      displayValue,
      displayHeading,

      onMouseEnter,
      onMouseLeave,
      onKeyDown,
      focusSearch,
      blurSearch,
      setSearch,
      clearSearch,
      searchInput,
      selectOption,
      selected,
      value
    }
  }
)
/*
export const defaultSelectProps = {
  ...defaultMenuContextProps,
  searchOptions,
}

class Context extends MenuContext<

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

  constructor(
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

  closeState() {
    return {
      ...(this.constructor as typeof Context).inactiveState,
      options: this.props.options
    }
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
}
*/

export const {
  Provider: SelectProvider,
  Consumer: SelectConsumer,
  Use:      useSelect
} = SelectContext

export default SelectContext