import MenuContext, { defaultMenuContextProps } from '@/src/context/Menu'
import { Generator, WithRequiredFrom } from '@abw/react-context'
import { withIconsRenderer } from '@/src/utils/index'
import { DropdownMenuActions, DropdownMenuProps, DropdownMenuState } from './types'

export const defaultDropdownMenuContextProps = {
  ...defaultMenuContextProps,
  displayOption: withIconsRenderer,
}

class DropdownMenuContext extends MenuContext<
  DropdownMenuProps,
  DropdownMenuState,
  DropdownMenuActions
> {
  static debug        = false
  static debugPrefix  = 'Dropdown > '
  static debugColor   = 'MediumVioletRed'
  static actions = [
    'onMouseEnter',
    'onMouseLeave',
    'onFocus',
    'onBlur',
    'onClick',
    'onKeyDown',
    'open',
    'close',
    'setCursor',
    'selectCursor',
    'selectOption',
    'triggerRef',
    'menuRef',
    'activeRef'
  ]

  // static defaultProps = defaultDropdownMenuContextProps

  config: WithRequiredFrom<
    DropdownMenuProps,
    typeof defaultDropdownMenuContextProps
  >

  constructor(props: DropdownMenuProps) {
    super(props)
    this.mounted = false
    this.config = {
      ...defaultDropdownMenuContextProps,
      ...props
    }
  }
  getRenderProps() {
    return {
      ...this.config,
      ...this.state,
      ...this.actions
    }
  }
}

const generated = Generator(DropdownMenuContext)
export const useDropdownMenu = generated.Use
export default generated