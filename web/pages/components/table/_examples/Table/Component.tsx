import { Table } from '@/src/index'

/* START */
// PRETEND: import { Table } from '@abw/badger-react-ui

const head = ['Name', 'Instrument']
const body = [
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  ['Mick Shrimpton', 'Drums']
]

const TableExample = () =>
  <Table
    celled striped
    head={head}
    body={body}
  />

export default TableExample