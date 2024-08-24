import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index.jsx'
// import { screen } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'

const rows = [
  { value: 101     },
  { value: 10101   },
  { value: 201     },
  { value: 301     },
  { value: 321     },
  { value: 3210    },
]

const columns = {
  value: {
    type: 'number',
  }
}

const DataTableExample = () =>
  <DataTable
    rows={rows}
    columns={columns}
  />

it(
  'select filter - search for "10"',
  async () => {
    await filter( '10', [ '101', '10,101', '3,210' ] )
  }
)

/*
it(
  'select filter - search for "IAN"',
  async () => {
    await filter( 'IAN', [ 'Brian', 'Diana' ] )
  }
)
*/

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
  expect(input).toHaveValue(parseInt(text))
  // console.log(prettyDOM(table))

  const trowsSel = table.querySelectorAll('tbody tr')
  expect(trowsSel.length).toBe(rows.length)

  // check the rows match
  let i = 0
  for (let row of rows) {
    expectRowValue(trowsSel[i++], row, text)
  }
}

function expectRowValue(row, value) {
  const tds = row.querySelectorAll('td')
  expect(tds[0]).toHaveTextContent(value)
}
