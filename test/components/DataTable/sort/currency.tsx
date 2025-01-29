import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index'
import { currency, fail } from '@abw/badger-utils'

type Person = {
  name: string
  salary: number
}
const Alan  : Person = { name: 'Alan',  salary: 23456  }
const Brian : Person = { name: 'Brian', salary: 100000 }
const Chris : Person = { name: 'Chris', salary: 3000   }

const DataTableExample = () =>
  <DataTable
    rows={[ Alan, Brian, Chris ]}
    columns={{
      name:   { },
      salary: {
        type: 'currency',
      },
    }}
  />

test(
  'datatable currency columns',
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
    const salaryHead = headings[1]

    // There should be 3 rows in the body
    expectRows(table, [ Alan, Brian, Chris ])

    // click on heading to sort down
    await act( () => user.click(salaryHead) )
    expectRows(table, [ Chris, Alan, Brian ])

    // click on heading again to sort up
    await act( () => user.click(salaryHead) )
    expectRows(table, [ Brian, Alan, Chris ])
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
  expect(tds[1]).toHaveTextContent(currency(expectRow.salary))
}