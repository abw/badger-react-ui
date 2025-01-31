import TableTh from './Th'
import TableTd from './Td'
import { TableCellProps } from './types'

export const TableCell = ({
  th=false,
  Th=TableTh,
  Td=TableTd,
  ...props
}: TableCellProps) =>
  th
    ? <Th {...props}/>
    : <Td {...props}/>

export default TableCell