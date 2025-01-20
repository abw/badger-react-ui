import Context          from './Context'
import DropdownContent  from './Content'
import { Themed }       from '@/src/Theme'
import { DropdownMenuProps } from './types'

const DropdownMenu = ({
  Content=DropdownContent,
  ...props
}: DropdownMenuProps) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(DropdownMenu, 'DropdownMenu')

