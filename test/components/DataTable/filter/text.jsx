import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index'
// import { screen } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'

const rows = [
  { name: 'Alan'     },
  { name: 'Brian'    },
  { name: 'Charlie'  },
  { name: 'Diana'    },
  { name: 'Edwina'   },
  { name: 'Felicity' },
]

const columns = {
  name: true,
}

const DataTableExample = () =>
  <DataTable
    rows={rows}
    columns={columns}
  />

it(
  'select filter - search for "an"',
  async () => {
    await filter( 'an', [ 'Alan', 'Brian', 'Diana' ] )
  }
)

it(
  'select filter - search for "IAN"',
  async () => {
    await filter( 'IAN', [ 'Brian', 'Diana' ] )
  }
)

async function filter(text, rows) {
  const user = userEvent.setup()
  const { container } = render(<DataTableExample/>)

  const datatable = container.querySelector('section.datatable')
  const header = datatable.querySelector('header')
  const table = datatable.querySelector('table')

  // There should be 6 rows in the body
  const trows = table.querySelectorAll('tbody tr')
  expect(trows.length).toBe(6)

  // There should be 3 controls: Filter, Columns and Page Size
  const controls = header.querySelectorAll('div.controls > div')
  expect(controls.length).toBe(3)

  // Click on the first 'filter' control
  const filters = controls[0]
  await act( () => user.click(filters) )

  // There should be 2 <theads> in the table, the second containing the
  // filter inputs
  const theads = table.querySelectorAll('thead')
  expect(theads.length).toBe(2)

  // The second one should contain a <th> element with an <input>
  const input = theads[1].querySelector('th input')
  expect(input).toBeDefined()

  await act( () => user.click(input) )
  await act( () => user.keyboard(text) )

  const trowsSel = table.querySelectorAll('tbody tr')
  expect(trowsSel.length).toBe(rows.length)

  // check the rows match
  let i = 0
  for (const row of rows) {
    expectRowName(trowsSel[i++], row, text)
  }
}

function expectRowName(row, name) {
  const tds = row.querySelectorAll('td')
  expect(tds[0]).toHaveTextContent(name)
}
