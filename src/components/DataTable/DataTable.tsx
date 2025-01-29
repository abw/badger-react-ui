import Context          from './Context'
import DataTableContent from './Content'
import { Themed }       from '@/src/Theme'
import { DataTableProps } from './types'

const DataTable = ({
  Content=DataTableContent,
  ...props
}: DataTableProps) =>
  <Context.Provider {...props}>
    <Content/>
  </Context.Provider>

export default Themed(DataTable, 'DataTable')

