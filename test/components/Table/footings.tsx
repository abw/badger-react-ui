import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Table } from '@/src/index'
import { fail } from '@abw/badger-utils'

const head = ['Name', 'Loudness']
const body = [
  ['Nigel Tufnel', 11],
  ['David St. Hubbins', 10],
  ['Derek Smalls', 10],
  ['Viv Savage', 8],
  ['Mick Shrimpton', 0]
]
const foot = [
  { className: 'text-right', text: 'Total' },
  39
]

const TableExample = () =>
  <Table
    celled shaded
    head={head}
    body={body}
    foot={foot}
  />

test(
  'table footings',
  async () => {
    const { container } = render(
      <TableExample/>
    )
    const table = container.querySelector('table') || fail('no table')
    expect(table).toBeDefined()

    const heads = table.querySelectorAll('thead tr')
    expect(heads.length).toBe(1)

    const h1ths = heads[0].querySelectorAll('th')
    expect(h1ths.length).toBe(2)
    expect(h1ths[0]).toHaveTextContent('Name')
    expect(h1ths[1]).toHaveTextContent('Loudness')

    const rows = table.querySelectorAll('tbody tr')
    expect(rows.length).toBe(5)

    const tds1 = rows[0].querySelectorAll('td')
    expect(tds1[0]).toHaveTextContent('Nigel Tufnel')
    expect(tds1[1]).toHaveTextContent('11')

    const tds2 = rows[1].querySelectorAll('td')
    expect(tds2[0]).toHaveTextContent('David St. Hubbins')
    expect(tds2[1]).toHaveTextContent('10')

    const tds3 = rows[2].querySelectorAll('td')
    expect(tds3[0]).toHaveTextContent('Derek Smalls')
    expect(tds3[1]).toHaveTextContent('10')

    const tds4 = rows[3].querySelectorAll('td')
    expect(tds4[0]).toHaveTextContent('Viv Savage')
    expect(tds4[1]).toHaveTextContent('8')

    const tds5 = rows[4].querySelectorAll('td')
    expect(tds5[0]).toHaveTextContent('Mick Shrimpton')
    expect(tds5[1]).toHaveTextContent('0')

    const feet = table.querySelectorAll('tfoot tr')
    expect(feet.length).toBe(1)

    const f1tds = feet[0].querySelectorAll('td')
    expect(f1tds.length).toBe(2)
    expect(f1tds[0]).toHaveTextContent('Total')
    expect(f1tds[0]).toHaveClass('text-right')
    expect(f1tds[1]).toHaveTextContent('39')
  }
)
