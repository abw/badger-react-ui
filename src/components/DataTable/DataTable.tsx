import Context          from './Context'
import DataTableContent from './Content'
import { Themed }       from '@/src/Theme'

const DataTable = ({
  Content=DataTableContent,
  ...props
}) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(DataTable, 'DataTable')

