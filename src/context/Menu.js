import DropdownContext from './Dropdown.js'
import { ARROW_DOWN, ARROW_UP, ENTER, ESCAPE, SPACE } from '@/src/constants.js'
import { doNothing, hasValue } from '@abw/badger-utils'
import { cursorFirst, cursorLast, cursorNext, cursorPrev, scrollParentChild } from '@/src/utils/index.js'

class MenuContext extends DropdownContext {
  static debug        = false
  static defaultProps = {
    options: [ ],
    openOnHover: false,
    closeOnBlur: true,
    closeDelay: 300,
    onLoad:   doNothing,
    onUnload: doNothing,
    onFocus:  doNothing,
    onBlur:   doNothing,
    onClick:  doNothing,
    onOpen:   doNothing,
    onClose:  doNothing,
    onSelect: doNothing,
    closeOnSelect: true
  }
  static inactiveState = {
    isOpen:   false,
    cursor:   undefined,
    selected: undefined,
  }
  static initialState = {
    ...this.inactiveState
  }

  open(cursor=this.initialCursor() ?? this.cursorFirstIndex()) {
    this.debug(`open(${cursor})`)
    this.setState(
      {
        isOpen: true,
        cursor,
      },
      this.props.onOpen
    )
  }

  onKeyDown(event) {
    this.debug(`onKeyDown(${event.key})`)
    this.debug(`alt: `, event.altKey)
    this.debug(`ctrl: `, event.ctrlKey)
    this.debug(`meta: `, event.metaKey)

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
      case SPACE:
        this.state.isOpen
          ? this.selectCursor()
          : this.open(this.initialCursor() ??  this.cursorFirstIndex())
        break

      case ESCAPE:
        this.close()
        break

      default:
        this.debug(`ignored key ${event.key}`)
        return
    }
    event.preventDefault()
  }

  menuOptions() {
    return this.props.options
  }

  initialCursor() {
    // subclasses can redefine this to return this.state.cursor if they
    // want to keep a previously selected option selected
    return null
  }
  cursorFirstIndex() {
    return cursorFirst(
      this.menuOptions(),
      this.props.validOption
    )
  }
  cursorLastIndex() {
    return cursorLast(
      this.menuOptions(),
      this.props.validOption
    )
  }
  cursorNextIndex() {
    return cursorNext(
      this.menuOptions(),
      this.state.cursor,
      this.props.validOption
    )
  }
  cursorPrevIndex() {
    return cursorPrev(
      this.menuOptions(),
      this.state.cursor,
      this.props.validOption
    )
  }

  setCursor(cursor) {
    this.debug(`setCursor(${cursor})`)
    //const { options } = this.props
    //// handle cases where cursor is less than 0 or greater than the length
    //// TODO: skip disabled options and separators
    //cursor = (options && options.length)
    //  ? (cursor + options.length) % options.length
    //  : undefined
    this.setState({ cursor })
  }

  selectCursor() {
    this.debug(`selectCursor()`)
    const { cursor } = this.state
    const options = this.menuOptions()
    if (options && options.length && hasValue(cursor)) {
      const value = options[cursor]
      this.debug(`selectCursor() ${cursor} =>`, value)
      this.selectOption(value)
    }
    else {
      this.debug(`Not selecting: cursor out of range`)
    }
  }

  selectOption(value) {
    this.debug(`selectOption()`, value)
    this.setState(
      // TODO: this needs to be abstracted out
      // For select it's:
      // {
      //   value,
      //   input: this.inputValue(value)
      //   ...inactiveState
      // },
      this.selectState(value),
      () => this.props.onSelect(value)
    )
    if (this.props.closeOnSelect) {
      this.debug(`closeOnSelect is set, closing`)
      this.closeSoon(true)
    }
    else {
      this.debug(`closeOnSelect is not set, NOT closing`)
    }
  }

  selectState(value) {
    return { selected: value }
  }

  /*
  // do we have a trigger in select/search?  I suppose so...
  triggerRef(ref) {
    this._triggerRef = ref
  }

  focusTrigger() {
    if (this._triggerRef) {
      this.debug('focussing trigger')
      this._triggerRef.focus()
    }
    else {
      this.debug('no trigger to focus')
    }
  }
  */

  menuRef(ref){
    this._menuRef = ref
  }

  activeRef(ref) {
    scrollParentChild(this._menuRef, ref)
  }
}

export default MenuContext