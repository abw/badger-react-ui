import { TableV1 as Table } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { TableV1 as Table } from '@abw/badger-react-ui

const headRows = [
  ['Name', 'Instrument']
]
const footRows = [
  {
    className: 'green text-center',
    cells: [
      { colSpan: 2, text: 'Spinal Tap' }
    ]
  },
]
const bodyRows = [
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  ['Mick Shrimpton', 'Drums']
]

const TableExample = () =>
  <Table
    celled shaded
    headRows={headRows}
    bodyRows={bodyRows}
    footRows={footRows}
  />

export default TableExample