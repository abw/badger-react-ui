import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Table } from '@/src/index.jsx'

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

test(
  'table footRows',
  async () => {
    const { container } = render(
      <TableExample/>
    )
    const table = container.querySelector('table')
    expect(table).toBeDefined()

    const heads = table.querySelectorAll('thead tr')
    expect(heads.length).toBe(1)

    const h1ths = heads[0].querySelectorAll('th')
    expect(h1ths.length).toBe(2)
    expect(h1ths[0]).toHaveTextContent('Name')
    expect(h1ths[1]).toHaveTextContent('Instrument')

    const rows = table.querySelectorAll('tbody tr')
    expect(rows.length).toBe(5)

    const tds1 = rows[0].querySelectorAll('td')
    expect(tds1[0]).toHaveTextContent('Nigel Tufnel')
    expect(tds1[1]).toHaveTextContent('Guitar')

    const tds2 = rows[1].querySelectorAll('td')
    expect(tds2[0]).toHaveTextContent('David St. Hubbins')
    expect(tds2[1]).toHaveTextContent('Guitar')

    const tds3 = rows[2].querySelectorAll('td')
    expect(tds3[0]).toHaveTextContent('Derek Smalls')
    expect(tds3[1]).toHaveTextContent('Bass')

    const tds4 = rows[3].querySelectorAll('td')
    expect(tds4[0]).toHaveTextContent('Viv Savage')
    expect(tds4[1]).toHaveTextContent('Keyboards')

    const tds5 = rows[4].querySelectorAll('td')
    expect(tds5[0]).toHaveTextContent('Mick Shrimpton')
    expect(tds5[1]).toHaveTextContent('Drums')

    const feet = table.querySelectorAll('tfoot tr')
    expect(feet.length).toBe(1)
    expect(feet[0]).toHaveClass('green text-center')

    const f1tds = feet[0].querySelectorAll('td')
    expect(f1tds.length).toBe(1)
    expect(f1tds[0]).toHaveTextContent('Spinal Tap')
  }
)
