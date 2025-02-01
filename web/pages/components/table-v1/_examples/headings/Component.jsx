import { TableV1 as Table } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { TableV1 as Table } from '@abw/badger-react-ui

const headings = ['Name', 'Instrument']
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
    headings={headings}
    bodyRows={bodyRows}
  />

export default TableExample