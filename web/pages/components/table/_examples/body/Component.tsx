import { Table } from '@/src/index'

/* START */
// PRETEND: import { Table } from '@abw/badger-react-ui

export const body = [
  // simple rows as arrays of text
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  // cells can be functions returning JSX content
  ['Viv Savage',
    () => <div>
      Keyboards
      <small>(and rocket fuel)</small>
    </div>
  ],
  // row as an object with cells array and other row attributes
  {
    className: 'error',
    cells: ['Mick Shrimpton', 'Drums']
  },
  // row with cells as objects
  [
    { th: true, text: 'Ian Faith' },
    { th: true, className: 'green inverse', text: 'Manager' }
  ]
]

const TableExample = () =>
  <Table
    celled shaded
    body={body}
  />

export default TableExample