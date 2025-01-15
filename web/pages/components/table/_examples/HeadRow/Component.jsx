import { Table } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { Table, TableCell, cellProps } from '@abw/badger-react-ui

const headings = ['Name', 'Loudness']
const bodyRows = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const footings = ['Total',39]

const Row = ({ cells }) =>
  <tr>
    <td>{cells[0]}</td>
    <td className="text-right">{cells[1]}</td>
  </tr>

const HeadRow = ({ cells }) =>
  <tr>
    <th>{cells[0]}</th>
    <th className="text-right">{cells[1]}</th>
  </tr>

const TableExample = () =>
  <Table
    celled shaded
    Row={Row}
    HeadRow={HeadRow}
    headings={headings}
    bodyRows={bodyRows}
    footings={footings}
  />

export default TableExample