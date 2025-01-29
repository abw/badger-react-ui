import Context from './Context'
import MultiSelectContent from './Content.js'
import { Themed } from '@/src/Theme'
import { MultiSelectProps } from './types.js'

const MultiSelect = ({
  Content=MultiSelectContent,
  ...props
}: MultiSelectProps) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

const ThemedMultiSelect = Themed(MultiSelect, 'MultiSelect')
export default ThemedMultiSelect