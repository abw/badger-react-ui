import { Table, TableCell, tableCellProps, TableRowComponent } from '@/src/index'

/* START */
// PRETEND: import {
// PRETEND:   Table, TableCell, tableCellProps, TableRowComponent
// PRETEND: } from '@abw/badger-react-ui

const head = ['Name', 'Loudness']
const body = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const foot = [ 'Total', 39 ]

const Row: TableRowComponent = ({ cells, th=false }) =>
  <tr>
    <TableCell
      {...tableCellProps(cells[0])}
      th={th}
    />
    <TableCell
      {...tableCellProps(cells[1])}
      th={th}
      className="text-right"
    />
  </tr>

const TableExample = () =>
  <Table
    celled shaded
    Row={Row}
    head={head}
    body={body}
    foot={foot}
  />

export default TableExample