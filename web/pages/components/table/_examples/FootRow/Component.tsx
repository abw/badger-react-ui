import { Table, TableRowComponent } from '@/src/index'

/* START */
// PRETEND: import { Table, TableRowComponent } from '@abw/badger-react-ui

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

const HeadAndFootRow: TableRowComponent = ({ cells }) =>
  <tr>
    <th>{cells[0] as string}</th>
    <th className="text-right">{cells[1] as string}</th>
  </tr>

const TableExample = () =>
  <Table
    celled shaded
    Row={Row}
    HeadRow={HeadAndFootRow}
    FootRow={HeadAndFootRow}
    head={head}
    body={body}
    foot={foot}
  />

export default TableExample