import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataTable } from '@/src/index'
import animals from '@/test/lib/animals'
import { fail } from '@abw/badger-utils'

const DataTableExample = () =>
  <DataTable
    rows={animals}
    columns={{
      name: true,
      animal: true,
      id: { hidden: true },
      role: { hidden: true },
    }}
  />

test(
  'datatable columns',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DataTableExample/>
    )
    const datatable = container.querySelector('section.datatable') || fail('no datatable')
    const table = datatable.querySelector('table') || fail('no table')
    const header = datatable.querySelector('header') || fail('no header')
    const dropdown = header.querySelectorAll('div.dropdown')[0]
    const trigger = dropdown.querySelector('div.trigger') || fail('no trigger')

    // screen.debug()
    expectColumns(table, ['Name', 'Animal'])

    // click on the columns dropdown
    expect(trigger).toBeTruthy()
    expect(trigger).toHaveTextContent('Columns')
    await user.click(trigger)

    // enable id
    let labels = dropdown.querySelectorAll('div.body div.sortable.list label')
    screen.debug()
    expect(labels.length).toBe(4)
    await user.click(labels[2])
    expectColumns(table, ['Name', 'Animal', 'Id'])

    // enable role
    labels = dropdown.querySelectorAll('div.body div.sortable.list label')
    await user.click(labels[3])
    expectColumns(table, ['Name', 'Animal', 'Id', 'Role'])

    // disable name
    labels = dropdown.querySelectorAll('div.body div.sortable.list label')
    await user.click(labels[0])
    expectColumns(table, ['Animal', 'Id', 'Role'])
  }
)

function expectColumns(table: HTMLTableElement, headings: string[]) {
  const ths = table.querySelectorAll('thead > tr > th')
  expect(ths.length).toBe(headings.length)
  headings.forEach(
    (heading, n) => expect(ths[n]).toHaveTextContent(heading)
  )

}
