import { Table, Icon } from '@/src/index'

/* START */
import React from 'react'
// PRETEND: import { Table, Icon } from '@abw/badger-react-ui

const columns = {
  name: {
    head: 'Musician',
  },
  instrument: {
    head: 'Instrument',
    body: ({ row }) => `${row.instrument} (${row.volume})`,
  },
  alive: {
    head: {
      className: 'text-center',
      text: 'Living',
    },
    body: {
      th: true,
      className: 'text-center',
      text: ({ row }) => row.alive
        ? <Icon name="check" color="green-50"/>
        : <Icon name="cross" color="red-50"/>
    }
  }
}

const rows = [
  {
    name: 'Nigel Tufnel',
    instrument: 'Guitar',
    volume: 11,
    alive: true
  },
  {
    name: 'David St. Hubbins',
    instrument: 'Guitar',
    volume: 10,
    alive: true
  },
  {
    name: 'Derek Smalls',
    instrument: 'Bass',
    volume: 9,
    alive: true
  },
  {
    name: 'Viv Savage',
    instrument: 'Keyboards',
    volume: 8,
    alive: true,
  },
  {
    name: 'Mick Shrimpton',
    instrument: 'Drums',
    volume: 9,
    alive: false
  }
]

const TableExample = () =>
  <Table
    wide celled shaded
    columns={columns}
    rows={rows}
  />

export default TableExample