import DataTable from '../DataTable/DataTable'
import Responsive from './Responsive'
import Body from './Body'
import { DataTablesProps } from './types'

const DataTables = ({
  breakpoint,
  ...props
}: DataTablesProps) =>
  breakpoint
    ? <Responsive
        breakpoint={breakpoint}
        {...props}
      />
    : <DataTable
        Body={Body}
        {...props}
      />

export default DataTables