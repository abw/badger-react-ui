import { Table, TableCell, tableCellProps, TableRowComponent, TableTh } from '@/src/index'

/* START */
// PRETEND: import {
// PRETEND:   Table, TableCell, tableCellProps, TableRowComponent, TableTh
// PRETEND: } from '@abw/badger-react-ui

const head = ['Name', 'Loudness']
const body = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const foot = ['Total',39]

const Row: TableRowComponent = ({ cells }) =>
  <tr>
    <td>{cells[0] as string}</td>
    <td className="text-right">{cells[1] as string}</td>
  </tr>

const HeadRow: TableRowComponent = ({ cells }) =>
  <tr>
    <TableCell th {...tableCellProps(cells[0])}/>
    <TableTh className="text-right" {...tableCellProps(cells[1])}/>
  </tr>

const TableExample = () =>
  <Table
    celled shaded
    Row={Row}
    HeadRow={HeadRow}
    head={head}
    body={body}
    foot={foot}
  />

export default TableExample