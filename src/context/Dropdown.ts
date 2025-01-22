import { Context, ContextConstructorProps, ContextProps, WithRequiredFrom } from '@abw/react-context'
import { ENTER, ESCAPE, SPACE } from '@/src/constants'
import { doNothing, sleep } from '@abw/badger-utils'
import { ThisCallback } from '../types'

export const defaultDropdownContextProps = {
  openOnHover: false,
  closeOnBlur: true,
  closeDelay:  300,
  onLoad:   doNothing as ThisCallback,
  onUnload: doNothing as ThisCallback,
  onFocus:  doNothing,
  onBlur:   doNothing,
  onClick:  doNothing,
  onOpen:   doNothing,
  onClose:  doNothing,
}

export type DropdownContextProps = ContextProps<{
  openOnHover?: boolean
  closeOnBlue?: boolean
  closeDelay?: number
  onLoad?: ThisCallback
  onUnload?: ThisCallback
  onFocus?: () => void
  onBlur?: () => void
  onClick?: () => void
  onOpen?: () => void
  onClose?: () => void
}>

export type DropdownContextState = {
  isOpen?: boolean
  hasHover?: boolean
  hasFocus?: boolean
}
export type DropdownContextActions = Record<string, unknown>

class DropdownContext<
  Props extends DropdownContextProps = DropdownContextProps,
  State extends DropdownContextState = DropdownContextState,
  Actions extends DropdownContextActions = DropdownContextActions
> extends Context<
  Props,
  State,
  Actions
> {
  static debug = false
  static inactiveState = {
    isOpen: false,
  }
  static initialState = {
    ...this.inactiveState
  }
  static defaultProps = defaultDropdownContextProps

  // Yeah, this doesn't work :-(
  // declare ['constructor']: typeof DropdownContext

  config: WithRequiredFrom<
    DropdownContextProps,
    typeof defaultDropdownContextProps
  >
  mounted: boolean
  _triggerRef?: HTMLElement

  constructor(
    props: ContextConstructorProps<
      Props,
      State,
      Actions
    >
  ) {
    super(props)
    this.mounted = false
    this.config = {
      ...defaultDropdownContextProps,
      ...props
    }
  }

  componentDidMount() {
    this.mounted = true
    this.config.onLoad(this)
  }

  componentWillUnmount() {
    this.mounted = false
    this.config.onUnload(this)
  }

  onMouseEnter() {
    this.debug(`onMouseEnter()`)
    this.setState(
      { hasHover: true },
      this.config.openOnHover
        ? () => { this.open(); this.focusTrigger() }
        : undefined
    )
  }

  onMouseLeave() {
    this.debug(`onMouseLeave()`)
    this.setState(
      { hasHover: false },
      this.props.openOnHover
        ? () => this.closeSoon()
        : undefined
    )
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
    if (this.config.closeOnBlur) {
      this.closeSoon()
    }
  }

  onClick() {
    this.debug('onClick()')
    return this.state.isOpen
      ? this.close()
      : this.open()
  }

  open() {
    this.debug(`open()`)
    this.setState(
      {
        isOpen: true,
      },
      this.props.onOpen
    )
  }

  close() {
    this.debug('close()')
    this.setState(
      this.closeState(),
      this.props.onClose
    )
  }
  closeState() {
    const cstr = this.constructor as typeof DropdownContext
    return cstr.inactiveState
  }

  closeSoon(force=false) {
    this.debug(`closeSoon()  force:${force}`)
    sleep(this.config.closeDelay)
      .then(
        () => {
          if (this.closeable(force)) {
            this.close()
          }
          else {
            this.debug(`NOT closing force:${force} hasHover:${this.state.hasHover}`)
          }
        }
      )
  }

  closeable(force: boolean) {
    return force || ! this.state.hasHover
  }

  onKeyDown(event: React.KeyboardEvent) {
    this.debug(`onKeyDown(${event.key})`)

    switch (event.key) {
      case ENTER:
      case SPACE:
        if (this.state.isOpen) {
          this.close()
        }
        else {
          this.open()
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

  triggerRef(ref: HTMLElement) {
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
}

export default DropdownContext