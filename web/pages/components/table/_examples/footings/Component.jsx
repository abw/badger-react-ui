import { Table } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { Table } from '@abw/badger-react-ui

const headings = ['Name', 'Loudness']
const bodyRows = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const footings = [
  { className: 'text-right', text: 'Total' },
  39
]

const TableExample = () =>
  <Table
    celled shaded
    headings={headings}
    bodyRows={bodyRows}
    footings={footings}
  />

export default TableExample