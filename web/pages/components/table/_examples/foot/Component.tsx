import { Table } from '@/src/index'

/* START */
// PRETEND: import { Table } from '@abw/badger-react-ui

const head = [
  ['Name', 'Instrument']
]
const foot = [
  {
    className: 'green text-center',
    cells: [
      { colSpan: 2, text: 'Spinal Tap' }
    ]
  },
]
const body = [
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  ['Mick Shrimpton', 'Drums']
]

const TableExample = () =>
  <Table
    celled shaded
    head={head}
    body={body}
    foot={foot}
  />

export default TableExample