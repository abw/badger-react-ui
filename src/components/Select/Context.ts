import { Model } from '@abw/react-context'
import { selectDefaults } from './defaults'
import { hasValue, sleep } from '@abw/badger-utils'
import { useCursor, useTrigger } from '@/src/hooks'
import { useCallback, useEffect, useRef, useState } from 'react'
import { SelectProps, SelectRenderProps } from './types'
import { debugFunction, SelectOption, scrollParentChild } from '@/src/utils'
import {
  ARROW_DOWN, ARROW_UP, BACKSPACE, BLANK, ENTER, ESCAPE, SPACE, TAB
} from '@/src/constants'

export const SelectContext = Model<SelectProps, SelectRenderProps>(
  config => {
    const {
      options: allOptions,
      value: inputValue,
      closeOnSelect,
      search,
      closeOnBlur = ! search,
      findOption,
      validOption,
      searchOptions,
      onSelect,
      onUpdate,
      debugPrefix,
      ...props
    } = {
      ...selectDefaults,
      ...config
    }

    // debugging function
    const debug = debugFunction({
      ...props,
      debugPrefix
    })

    // The default set of selectable options is allOptions but we might be
    // filtering them via a search, so options is used to store the subset of
    // options that are currently in play
    const [options, setOptions] = useState(allOptions)

    // The value property (aliased temporarily to inputValue) can be specified
    // to indicate which of the options is currently selected.  We use this
    // to determine the current value and cursor.  Note that our options might
    // be objects, e.g. { name: 'Bobby', value: 123 } and the value passed in
    // can either match the object or just be an internal value, e.g. 123.
    const [initialValue, initialCursor] = findOption(
      allOptions, inputValue
    )

    // The value will change when an option is selected.
    const [value, setValue] = useState<SelectOption|undefined>(initialValue)

    // The selected item is a transient thing which we use to indicate that
    // an item has been selected in the menu by clicking or pressing Enter.
    // It is displayed with a pulsing darker background color as positive
    // feedback that the item was selected.  Note that we keep this separate
    // from the current value.  When the select menu is opened we clear the
    // selected item so it doesn't remain highlighted in the menu.  But we
    // don't change the value because that's displayed in the header.
    const [selected, setSelected] = useState<SelectOption|undefined>(undefined)

    // cursor hook
    const {
      cursor,
      setCursorIndex: setCursor,
      setCursorFirst,
      setCursorNext,
      setCursorPrev,
      setCursorLast,
      // clearCursor
    } = useCursor({
      ...props,
      cursor: initialCursor,
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
        resetSearch()

        const [ , valueCursor] = findOption(allOptions, value)
        if (hasValue(valueCursor)) {
          setCursor(valueCursor)
        }
        else {
          setCursorFirst()
        }
        if (props.onOpen) {
          props.onOpen()
        }
      },
      onClose: () => {
        if (props.onClose) {
          props.onClose()
        }
      }
    })

    // search filters currently list of options
    const [searchInput, setSearchInput] = useState<string|undefined>(undefined)
    const searchRef = useRef<HTMLInputElement>(null)
    // Don't think we need this after all - maybe it's for openOnHover?
    // const [searchFocus, setSearchFocus] = useState<boolean>(false)

    // When the search input changes we filter the initial set of options
    // (allOptions) and set the current options to be the filtered set.  We
    // also set the cursor back to the first item.  TODO: that should probably
    // happen inside useCursor?
    const searchFilterOptions = useCallback(
      (input?: string) => {
        debug('searchFilterOptions:', input)
        setOptions(
          (hasValue(input) && input.length)
            ? searchOptions(
              input, allOptions.filter(validOption)
            )
            : allOptions
        )
        setCursorFirst()
      },
      [debug, searchOptions, allOptions, validOption, setCursorFirst]
    )

    const focusSearch = useCallback(
      (e?: React.FocusEvent) => {
        debug('focusSearch()')
        e?.stopPropagation()
        // setSearchFocus(true)
      },
      [debug]
    )

    const blurSearch = useCallback(
      () => {
        debug('blurSearch()')
        // setSearchFocus(false)
        trigger.closeSoon()
      },
      [trigger, debug]
    )

    const setSearch = useCallback(
      (searchInput: string | undefined) => {
        debug('setSearch:', searchInput)
        setSearchInput(searchInput)
        searchFilterOptions(searchInput)
      },
      [debug, searchFilterOptions]
    )

    const searchKey = useCallback(
      (key?: string) => {
        setSearch(
          (searchInput ?? BLANK) + key
        )
      },
      [setSearch, searchInput]
    )

    const searchBackspace = useCallback(
      () => {
        debug(`searchBackspace()`)
        setSearch(
          (hasValue(searchInput) && searchInput.length > 1)
            ? searchInput.slice(0, -1)
            : undefined
        )
      },
      [debug, setSearch, searchInput]
    )

    // Called when user clicks on "X" clear icon to right of search input
    const clearSearch = useCallback(
      (e?: React.MouseEvent) => {
        e?.preventDefault()
        e?.stopPropagation()
        if (searchRef.current) {
          debug('re-focussing search input')
          searchRef.current.focus()
        }
        setSearch(undefined)
      },
      [debug, searchRef, setSearch]
    )

    // Called when the select menu is opened to reset any existing search
    const resetSearch = useCallback(
      () => {
        setSearchInput(undefined)
        setOptions(allOptions)
      },
      [allOptions]
    )

    // Update the selected item
    const clearSelected = useCallback(
      () => setSelected(undefined),
      []
    )

    // Select an option passed as an argument
    const selectOption = useCallback(
      (option: SelectOption) => {
        debug(`selectOption()`, option)
        setSelected(option)
        setValue(option)
        if (onSelect) {
          onSelect(option)
        }
        if (closeOnSelect) {
          debug(`closeOnSelect is set, closing`)
          trigger.closeSoon(true)
        }
        else {
          debug(`closeOnSelect is not set, NOT closing`)
        }
      },
      [debug, onSelect, closeOnSelect, trigger]
    )

    // Select the option currently indicated by the cursor
    const selectCursor = useCallback(
      () => {
        if (options && options.length && hasValue(cursor)) {
          const option = options[cursor]
          debug(`selectCursor() ${cursor} =>`, option)
          selectOption(option)
        }
      },
      [debug, cursor, options, selectOption]
    )

    // Custom key handler to replace the one from useTrigger().  It has to
    // replicate the functionality of it but with extra bells and whistles
    const onKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
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
            else if (! search || (searchInput ?? BLANK).length === 0) {
              selectCursor()
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
      },
      [
        cursor, debug, props.disabled, search, searchBackspace, searchInput,
        searchKey, selectCursor, setCursorFirst, setCursorLast, setCursorNext,
        setCursorPrev, trigger
      ]
    )

    // handler for active item - scrolls the parent menu container until the
    // active item is in view
    const menuRef = useRef<HTMLDivElement>(null)
    const activeRef = useCallback(
      (ref: HTMLElement | null) => {
        // When we first render the menu the activeRef can be fired but the
        // menuRef hasn't been set.  A slight delay fixes this.  If memory
        // serves it pushes the action onto the next render cycle.
        sleep(5).then(
          () => {
            if (ref && menuRef.current) {
              debug('scrolling active item into view')
              scrollParentChild(menuRef.current, ref)
            }
            else {
              debug(`no ref, can't scroll: `, menuRef.current)
            }
          })
      },
      [menuRef, debug]
    )

    // Detect when allOptions has changed and update value
    useEffect(
      () => {
        const [newValue] = findOption(
          allOptions, value
        )
        debug(`allOptions changed => `, newValue)
        setValue(newValue)
        const onChange = onUpdate || onSelect
        if (onChange) {
          onChange(newValue)
        }
      },
      // This is correct.  We only want this to fire if the list of options
      // have changed.  We want to then match the current value with any
      // corresponding value in the new set of options
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [allOptions]
    )

    // Detect when initialValue changes
    useEffect(
      () => {
        const [newValue] = findOption(
          allOptions, initialValue
        )
        debug(`initialValue changed (${initialValue}) => `, newValue)
        setValue(newValue)
        const onChange = onUpdate || onSelect
        if (onChange) {
          onChange(newValue)
        }
      },
      // This is correct.  We only want this to fire if the initialValue has
      // changed.  We want to then match the new value with any corresponding
      // value in the set of options
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [initialValue]
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
      search,
      findOption,
      validOption,
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

export const {
  Provider: SelectProvider,
  Consumer: SelectConsumer,
  Use:      useSelect
} = SelectContext

export default SelectContext

/*
// Older version - some code left for notes / reminders

class Context extends MenuContext<

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

  closeable(force?: boolean) {
    this.debug(`closeable()  force:${force}  hasHover:${this.state.hasHover}  searchFocus:${this.state.searchFocus}`)
    return force || ! (this.state.hasHover || this.state.searchFocus)
  }

}
*/

