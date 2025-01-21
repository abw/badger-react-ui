import DropdownContext, { defaultDropdownContextProps, DropdownContextActions, DropdownContextProps, DropdownContextState } from './Dropdown'
import { ARROW_DOWN, ARROW_UP, ENTER, ESCAPE, SPACE } from '@/src/constants'
import { doNothing, hasValue } from '@abw/badger-utils'
import { WithRequiredFrom } from '@abw/react-context'
import {
  cursorFirst, cursorLast, cursorNext, cursorPrev, IsValidOption,
  OnSelect, scrollParentChild, SelectOption,
} from '@/src/utils/index'

export const defaultMenuContextProps = {
  ...defaultDropdownContextProps,
  options: [ ] as SelectOption[],
  onSelect: doNothing as OnSelect,
  closeOnSelect: true
}

// export type MenuContextOption = SelectOption
// & {
//export type MenuContextOption = RenderableValue & {
//  id?: string | number
//  value?: string | number | boolean | object
//}

export type MenuContextProps = DropdownContextProps & {
  options: SelectOption[]
  validOption: IsValidOption
  onSelect: (value: SelectOption) => void
}

export type MenuContextState = DropdownContextState & {
  cursor?: number | null
  selected?: SelectOption
}

export type MenuInactiveState = {
  isOpen: boolean
  cursor?: number
  selected?: SelectOption,
}


export type MenuContextActions = DropdownContextActions

class MenuContext<
  Props extends MenuContextProps = MenuContextProps,
  State extends MenuContextState = MenuContextState,
  Actions extends MenuContextActions = MenuContextActions
> extends DropdownContext<
  Props,
  State,
  Actions
> {
  static debug = false
  static defaultProps = defaultMenuContextProps
  /*
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
  */
  static inactiveState: MenuInactiveState = {
    isOpen:   false,
    cursor:   undefined,
    selected: undefined,
  }
  static initialState = {
    ...this.inactiveState
  }

  config: WithRequiredFrom<
    MenuContextProps,
    typeof defaultMenuContextProps
  >
  _menuRef?: HTMLElement | null

  constructor(props: MenuContextProps) {
    super(props)
    this.mounted = false
    this.config = {
      ...defaultMenuContextProps,
      ...props
    }
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

  onKeyDown(event: React.KeyboardEvent) {
    this.debug(`onKeyDown(${event.key})`)
    this.debug(`alt: `, event.altKey)
    this.debug(`ctrl: `, event.ctrlKey)
    this.debug(`meta: `, event.metaKey)

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
      case SPACE:
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

      default:
        this.debug(`ignored key ${event.key}`)
        return
    }
    event.preventDefault()
  }

  menuOptions(): SelectOption[] {
    return this.props.options
  }

  initialCursor(): number | null | undefined {
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

  setCursor(cursor: number | null) {
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
      const value = options[cursor as number]
      this.debug(`selectCursor() ${cursor} =>`, value)
      this.selectOption(value)
    }
    else {
      this.debug(`Not selecting: cursor out of range`)
    }
  }

  selectOption(option: SelectOption) {
    this.debug(`selectOption()`, option)
    this.setState(
      // TODO: this needs to be abstracted out
      // For select it's:
      // {
      //   value,
      //   input: this.inputValue(value)
      //   ...inactiveState
      // },
      this.selectState(option),
      () => this.config.onSelect(option)
    )
    if (this.config.closeOnSelect) {
      this.debug(`closeOnSelect is set, closing`)
      this.closeSoon(true)
    }
    else {
      this.debug(`closeOnSelect is not set, NOT closing`)
    }
  }

  selectState(option: SelectOption) {
    return { selected: option }
  }

  menuRef(ref: HTMLElement){
    this._menuRef = ref
  }

  activeRef(ref: HTMLElement) {
    scrollParentChild(this._menuRef, ref)
  }

  /*
  getRenderProps(): Props & State & Actions {
    const props: Props = this.props
    const state: State = this.state
    const actions: Actions = this.actions

    return {
      ...this.config,
      ...actions
    }
  }
  */
}

export default MenuContext