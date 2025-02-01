import { TableV1 as Table } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { TableV1 as Table } from '@abw/badger-react-ui

const headings = ['Name', 'Instrument']
const rows = [
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  ['Mick Shrimpton', 'Drums']
]

const TableExample = () =>
  <Table
    celled striped
    headings={headings}
    rows={rows}
  />

export default TableExample