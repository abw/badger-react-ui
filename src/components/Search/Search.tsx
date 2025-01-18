import Context       from './Context'
import SearchContent from './Content'
import { Themed }    from '@/src/Theme'

const Search = ({
  Content=SearchContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Search, 'Search')