import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { DataTable } from '@/src/index'
import { fail } from '@abw/badger-utils'
// import { screen } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'

const rows = [
  { name: 'Alan',     role: 'admin' },
  { name: 'Brian',    role: 'admin' },
  { name: 'Charlie',  role: 'user'  },
  { name: 'Diana',    role: 'user'  },
  { name: 'Edwina',   role: 'guest' },
  { name: 'Frannie',  role: 'guest' },
]

const columns = {
  name: true,
  role: {
    type: 'select',
    selectOptions: [
      { value: 'admin', text: 'admin' },
      { value: 'user',  text: 'user'  },
      { value: 'guest', text: 'guest' }
    ]
  },
}

const DataTableExample = () =>
  <DataTable
    rows={rows}
    columns={columns}
  />

it(
  'select filter - select admin',
  async () => {
    await selectOption( 0, 'admin', [ 'Alan', 'Brian' ] )
  }
)

it(
  'select filter - select user',
  async () => {
    await selectOption( 1, 'user', [ 'Charlie', 'Diana' ] )
  }
)

it(
  'select filter - select guest',
  async () => {
    await selectOption( 2, 'guest', [ 'Edwina', 'Frannie' ] )
  }
)

async function selectOption(n: number, text: string, rows: string[]) {
  const user = userEvent.setup()
  const { container } = render(<DataTableExample/>)

  const datatable = container.querySelector('section.datatable') || fail('no datatable')
  const header = datatable.querySelector('header') || fail('no header')
  const table = datatable.querySelector('table') || fail('no table')

  // There should be 6 rows in the body
  const trows = table.querySelectorAll('tbody tr')
  expect(trows.length).toBe(6)

  // There should be 3 controls: Filter, Columns and Page Size
  const controls = header.querySelectorAll('div.controls > div')
  expect(controls.length).toBe(3)

  // Click on the first 'filter' control
  const filters = controls[0]
  await user.click(filters)

  // There should be 2 <theads> in the table, the second containing the
  // filter inputs
  const theads = table.querySelectorAll('thead')
  expect(theads.length).toBe(2)

  // The second one should contain 2 <th> elements
  const ths = theads[1].querySelectorAll('th')
  expect(ths.length).toBe(2)

  // The second <th> should be the "Role" pulldown
  const admin = ths[1]

  // It should contain a Select component which is initially closed
  const select = admin.querySelector('div.select') || fail('no select')
  expect(select).toBeDefined()
  expect(select).toHaveClass('closed')

  // Click on the select inputs to open it
  const inputs = select.querySelector('div.inputs') || fail('no inputs')
  expect(inputs).toBeDefined()
  await user.click(inputs)
  expect(select).toHaveClass('open')

  // There should now be a menu
  const menu = select.querySelector('div.menu') || fail('no menu')
  expect(menu).toBeDefined()

  // There should be three items
  const items = menu.querySelectorAll('div.item')
  expect(items.length).toBe(3)

  // The nth item should have the expected text
  const item = items[n]
  expect(item).toHaveTextContent(text)

  // Click on the item, and only some rows should be displayed
  await user.click(item)
  const trowsSel = table.querySelectorAll('tbody tr')
  expect(trowsSel.length).toBe(rows.length)

  // check the rows match
  let i = 0
  for (const row of rows) {
    expectRowNameRole(trowsSel[i++], row, text)
  }
}

function expectRowNameRole(row: Element, name: string, role: string) {
  const tds = row.querySelectorAll('td')
  expect(tds[0]).toHaveTextContent(name)
  expect(tds[1]).toHaveTextContent(role)
}
