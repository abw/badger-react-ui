import Head from './Columns/Head'
import Body from './Columns/Body'
import { TableColumnsProps } from './types'

const TableColumns = ({
  rows,
  columns,
  ...props
}: TableColumnsProps) =>
  <>
    <Head columns={columns} {...props}/>
    <Body columns={columns} rows={rows} {...props}/>
  </>

export default TableColumns