import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index.jsx'
import animals from '@/test/lib/animals.js'

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
    const datatable = container.querySelector('section.datatable')
    const table = datatable.querySelector('table')
    const header = datatable.querySelector('header')
    const dropdown = header.querySelectorAll('div.dropdown')[0]
    const trigger = dropdown.querySelector('div.trigger')

    // screen.debug()
    expectColumns(table, ['Name', 'Animal'])

    // click on the columns dropdown
    expect(trigger).toBeTruthy()
    expect(trigger).toHaveTextContent('Columns')
    await act( () => user.click(trigger) )

    // enable id
    let labels = dropdown.querySelectorAll('div.body div.sortable.list label')
    expect(labels.length).toBe(4)
    await act( () => user.click(labels[2]) )
    expectColumns(table, ['Name', 'Animal', 'Id'])

    // enable role
    labels = dropdown.querySelectorAll('div.body div.sortable.list label')
    await act( () => user.click(labels[3]) )
    expectColumns(table, ['Name', 'Animal', 'Id', 'Role'])

    // disable name
    labels = dropdown.querySelectorAll('div.body div.sortable.list label')
    await act( () => user.click(labels[0]) )
    expectColumns(table, ['Animal', 'Id', 'Role'])
  }
)

function expectColumns(table, headings) {
  const ths = table.querySelectorAll('thead > tr > th')
  expect(ths.length).toBe(headings.length)
  headings.forEach(
    (heading, n) => expect(ths[n]).toHaveTextContent(heading)
  )

}
