import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index'
import { fail, formatNumber, sleep } from '@abw/badger-utils'

type Person = {
  name: string
  points: number
}
const Alan  : Person = { name: 'Alan',  points: 200  }
const Brian : Person = { name: 'Brian', points: 100  }
const Chris : Person = { name: 'Chris', points: 1010 }

const DataTableExample = () =>
  <DataTable
    // debug
    rows={[ Alan, Brian, Chris ]}
    columns={{
      name:   { },
      points: {
        type: 'number',
      },
    }}
  />

test(
  'datatable number columns',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DataTableExample/>
    )
    const datatable = container.querySelector('section.datatable') || fail('no datatable')
    const table = datatable.querySelector('table') || fail('no table')

    // There should be one heading
    const headings = table.querySelectorAll('thead > tr > th')
    expect(headings.length).toBe(2)
    const pointsHead = headings[1]
    // console.log(`pointsHead: `, pointsHead)

    // There should be 3 rows in the body
    expectRows(table, [ Alan, Brian, Chris ])

    // click on heading to sort down
    await act( () => user.click(pointsHead) )
    await act( () => sleep(500) )
    expectRows(table, [ Brian, Alan, Chris ])

    // click on heading again to sort up
    await act( () => user.click(pointsHead) )
    expectRows(table, [ Chris, Alan, Brian ])
  }
)

function expectRows(table: HTMLTableElement, rows: Person[]) {
  const trows = table.querySelectorAll('tbody tr')
  expect(trows.length).toBe(rows.length)
  trows.forEach(
    (trow, n) => expectRow(trow, rows[n])
  )
}

function expectRow(row: Element, expectRow: Person) {
  const tds = row.querySelectorAll('td')
  expect(tds.length).toBe(2)
  expect(tds[0]).toHaveTextContent(expectRow.name)
  expect(tds[1]).toHaveTextContent(formatNumber(expectRow.points))
}