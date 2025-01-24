import Context          from './Context.js'
import DropdownContent  from './Content.js'
import { Themed }       from '@/src/Theme'
import { DropdownProps } from './types.js'

const Dropdown = ({
  Content=DropdownContent,
  content,
  children,
  ...props
}: DropdownProps) =>
  <Context.Provider content={content || children} {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Dropdown, 'Dropdown')

