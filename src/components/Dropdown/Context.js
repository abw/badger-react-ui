import BaseContext from '@/src/context/Dropdown.js'
import { Generator } from '@abw/react-context'

class DropdownContext extends BaseContext {
  static debug        = false
  static debugPrefix  = 'Dropdown > '
  static debugColor   = 'MediumVioletRed'
  static actions = [
    'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onClick', 'onKeyDown',
    'open', 'close', 'triggerRef'
  ]
}

const generated = Generator(DropdownContext)
export const useDropdown = generated.Use
export default generated