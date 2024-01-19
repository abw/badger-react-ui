import MenuContext from '@/src/context/Menu.js'
import { Generator } from '@abw/react-context'
import { withIconsRenderer } from '@/src/utils/index.js'

class DropdownContext extends MenuContext {
  static debug        = false
  static debugPrefix  = 'Dropdown > '
  static debugColor   = 'MediumVioletRed'
  static defaultProps = {
    ...this.defaultProps,
    options: [ ],
    displayOption: withIconsRenderer,
  }
  static actions = [
    'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onClick', 'onKeyDown',
    'open', 'close', 'setCursor', 'selectCursor', 'selectOption',
    'triggerRef', 'menuRef', 'activeRef'
  ]
}

const generated = Generator(DropdownContext)
export const useDropdown = generated.Use
export default generated