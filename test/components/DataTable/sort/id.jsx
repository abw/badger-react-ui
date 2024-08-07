import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index.jsx'

const Alan  = { name: 'Alan',  id: 23456  }
const Brian = { name: 'Brian', id: 100000 }
const Chris = { name: 'Chris', id: 3000   }

const DataTableExample = () =>
  <DataTable
    rows={[ Alan, Brian, Chris ]}
    columns={{
      name:   { },
      id: {
        type: 'id',
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
    const datatable = container.querySelector('section.datatable')
    const table = datatable.querySelector('table')

    // There should be one heading
    const headings = table.querySelectorAll('thead > tr > th')
    expect(headings.length).toBe(2)
    const idHead = headings[1]

    // There should be 3 rows in the body
    expectRows(table, [ Alan, Brian, Chris ])

    // click on heading to sort down
    await act( () => user.click(idHead) )
    expectRows(table, [ Chris, Alan, Brian ])

    // click on heading again to sort up
    await act( () => user.click(idHead) )
    expectRows(table, [ Brian, Alan, Chris ])
  }
)

function expectRows(table, rows) {
  const trows = table.querySelectorAll('tbody tr')
  expect(trows.length).toBe(rows.length)
  trows.forEach(
    (trow, n) => expectRow(trow, rows[n])
  )
}

function expectRow(row, expectRow) {
  const tds = row.querySelectorAll('td')
  expect(tds.length).toBe(2)
  expect(tds[0]).toHaveTextContent(expectRow.name)
  expect(tds[1]).toHaveTextContent(expectRow.id)
}