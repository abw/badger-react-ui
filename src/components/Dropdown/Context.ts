import BaseContext from '@/src/context/Dropdown'
import { Generator } from '@abw/react-context'
import { DropdownProps, DropdownState } from './types'

class DropdownContext extends BaseContext<
  DropdownProps,
  DropdownState
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
    'triggerRef'
  ]
}

const generated = Generator(DropdownContext)
export const useDropdown = generated.Use
export default generated