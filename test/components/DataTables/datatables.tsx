import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { DataTables } from '@/src/index'
import animals from '@/test/lib/animals'

const DataTablesExample = () =>
  <DataTables
    rows={animals}
    columns={{
      id: {
        heading: 'ID',
        type: 'id',
      },
      name: { } ,
      animal: { },
      role: {
        filterType: 'select',
        selectOptions: [
          { value: 'guest',     text: 'Guest' },
          { value: 'user',      text: 'User' },
          { value: 'admin',     text: 'Admin' },
          { value: 'superstar', text: 'Superstar' },
        ]
      }
    }}
  />

test(
  'datatables',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DataTablesExample/>
    )
    const topButtons = container.querySelectorAll('header button[role=navigation]')
    expect(topButtons.length).toBe(2)

    expectTables(container, 10, 10, 11)

    // page 2
    await user.click(topButtons[1])
    // screen.debug()
    expectTables(container, 10, 12, 33)

    // page 3
    await user.click(topButtons[1])
    // screen.debug()
    expectTables(container, 10, 41, 301)

    // page 4
    await user.click(topButtons[1])
    // screen.debug()
    expectTables(container, 4, 302, 1234)
  }
)

function expectTables(
  container: Element,
  n: number,
  fromId: number,
  toId: number
) {
  const tables = container.querySelectorAll('table')
  expect(tables.length).toBe(n)
  expect(tables[0].querySelector('tr:first-child td')).toHaveTextContent(String(fromId))
  expect(tables[n-1].querySelector('tr:first-child td')).toHaveTextContent(String(toId))
}
