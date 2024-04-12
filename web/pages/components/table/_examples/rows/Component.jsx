import { Table } from '@/src/index.jsx'

/* START */
import React from 'react'
// PRETEND: import { Table } from '@abw/badger-react-ui

export const rows = [
  // simple rows as arrays of text
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  // row as an object with cells array
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
    rows={rows}
  />

export default TableExample