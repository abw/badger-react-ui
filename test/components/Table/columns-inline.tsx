import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Table, Icon } from '@/src/index'
import { fail } from '@abw/badger-utils'

/*
const columns: TableColumns = {
  name: { },    // heading defaults to 'name'
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
*/

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

const TableExample1 = () =>
  <Table
    wide celled shaded
    rows={rows}
    columns={{
      name: {
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
    }}
  />

/*
const TableExample2 = () =>
  <Table
    wide celled shaded
    rows={rows}
    columns={columns}
  />
*/

test(
  'table columns',
  async () => {
    const { container } = render(
      <TableExample1/>
    )
    const table = container.querySelector('table') || fail('no table')
    expect(table).toBeDefined()

    const heads = table.querySelectorAll('thead tr')
    expect(heads.length).toBe(1)

    const h1ths = heads[0].querySelectorAll('th')
    expect(h1ths.length).toBe(3)
    expect(h1ths[0]).toHaveTextContent('name')
    expect(h1ths[1]).toHaveTextContent('Instrument')
    expect(h1ths[2]).toHaveTextContent('Living')

    const rows = table.querySelectorAll('tbody tr')
    expect(rows.length).toBe(5)

    expectRow(rows[0], 'Nigel Tufnel', 'Guitar (11)', 'green fgc-50 icon')
    expectRow(rows[1], 'David St. Hubbins', 'Guitar (10)', 'green fgc-50 icon')
    expectRow(rows[2], 'Derek Smalls', 'Bass (9)', 'green fgc-50 icon')
    expectRow(rows[3], 'Viv Savage', 'Keyboards (8)', 'green fgc-50 icon')
    expectRow(rows[4], 'Mick Shrimpton', 'Drums (9)', 'red fgc-50 icon')
  }
)

function expectRow(
  row: Element,
  name: string,
  instrument: string,
  iconClass: string
) {
  const tds = row.querySelectorAll('td')
  const th  = row.querySelector('th') || fail('no th')
  const svg = th.querySelector('svg')
  expect(tds[0]).toHaveTextContent(name)
  expect(tds[1]).toHaveTextContent(instrument)
  expect(th).toHaveClass('text-center')
  expect(svg).toHaveClass(iconClass)
}