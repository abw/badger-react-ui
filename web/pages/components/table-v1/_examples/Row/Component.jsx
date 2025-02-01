import { TableV1 as Table, TableCell, cellProps } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { TableV1 as Table, TableCell, cellProps } from '@abw/badger-react-ui

const headings = ['Name', 'Loudness']
const bodyRows = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const footings = [ 'Total', 39 ]

const Row = ({ cells, th=false }) =>
  <tr>
    <TableCell
      text={cells[0]}
      th={th}
    />
    <TableCell
      {...cellProps(cells[1])}
      th={th}
      className="text-right"
    />
  </tr>

const TableExample = () =>
  <Table
    celled shaded
    Row={Row}
    headings={headings}
    bodyRows={bodyRows}
    footings={footings}
  />

export default TableExample