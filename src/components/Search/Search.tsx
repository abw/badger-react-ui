import Context       from './Context'
import SearchContent from './Content'
import { Themed }    from '@/src/Theme'
import { SearchProps } from './types'

const Search = ({
  Content=SearchContent,
  ...props
}: SearchProps) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Search, 'Search')