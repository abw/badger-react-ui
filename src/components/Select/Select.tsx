import Context       from './Context'
import SelectContent from './Content'
import { Themed }    from '@/src/Theme'
import { SelectProps } from './types.js'

const Select = ({
  Content=SelectContent,
  ...props
}: SelectProps) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

const ThemedSelect = Themed(Select, 'Select')
export default ThemedSelect