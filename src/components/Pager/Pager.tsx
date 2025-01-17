import Context      from './Context'
import PagerContent from './Content'
import { Themed }   from '@/src/Theme'
import { PagerType } from './types'

const Pager: PagerType = ({
  Content=PagerContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(Pager, 'Pager')

