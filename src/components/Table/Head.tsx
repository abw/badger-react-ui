import TableRow from './Row'
import { rowProps } from './Utils'
import { TableHeadProps } from './types'

export const TableHead = ({
  headRows,
  Row=TableRow,
  HeadRow=Row,
  ...props
}: TableHeadProps) =>
  <thead {...props}>
    { headRows
      .map(
        row => rowProps(row)
      )
      .map(
        (row, n) =>
          <HeadRow
            key={row.key ?? n}
            th
            {...row}
          />
      )
    }
  </thead>

export default TableHead