import { Themed } from '@/src/Theme'
import Table from './Table'

const TableV1 = ({
  rows,
  columns,
  headings,
  footings,
  bodyRows,
  headRows = headings && [headings],
  footRows = footings && [footings],
  ...props
}) => {
  const body = columns
    ? bodyRows
    : bodyRows || rows
  return (
    <Table
      body={body}
      head={headRows}
      foot={footRows}
      rows={rows}
      columns={columns}
      {...props}
    />
  )
}

export default Themed(TableV1, 'TableV1')
