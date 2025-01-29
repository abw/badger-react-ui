import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index'
import animals from '@/test/lib/animals'
import { fail } from '@abw/badger-utils'

const DataTableExample = () =>
  <DataTable
    rows={animals}
    columns="id name animal"
  />

test(
  'datatable top paging buttons',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DataTableExample/>
    )
    const datatable = container.querySelector('section.datatable') || fail('no datatable')
    const header = datatable.querySelector('header') || fail('no header')
    const table = datatable.querySelector('table') || fail('no table')

    const topButtons = header.querySelectorAll('button[role=navigation]')
    expect(topButtons.length).toBe(2)

    const pageNos = header.querySelector(':scope > div > div:first-child')

    // There should be 10 rows in the body from Alan to Gertrude
    expect(pageNos).toHaveTextContent('Page 1/4 rows 1-10 of 34')
    expectRows(table, 10, ['Alan', 'Gertrude'])

    // click on next page
    await act( () => user.click(topButtons[1]) )
    expect(pageNos).toHaveTextContent('Page 2/4 rows 11-20 of 34')
    expectRows(table, 10, ['Hector', 'Quentin'])

    // click again
    await act( () => user.click(topButtons[1]) )
    expect(pageNos).toHaveTextContent('Page 3/4 rows 21-30 of 34')
    expectRows(table, 10, ['Roger', 'Al'])

    // and again
    await act( () => user.click(topButtons[1]) )
    expect(pageNos).toHaveTextContent('Page 4/4 rows 31-34 of 34')
    expectRows(table, 4, ['Bob', 'Roland'])
  }
)

test(
  'datatable bottom paging',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DataTableExample/>
    )
    const datatable = container.querySelector('section.datatable') || fail('no datatable')
    const footer = datatable.querySelector('footer') || fail('no footer')
    const table = datatable.querySelector('table') || fail('no table')

    // There should be 10 rows in the body from Alan to Gertrude
    expectRows(table, 10, ['Alan', 'Gertrude'])

    // click on page 2 button
    let buttons = footer.querySelectorAll('div.pages button')
    expect(buttons.length).toBe(3)
    await act( () => user.click(buttons[1]) )
    expectRows(table, 10, ['Hector', 'Quentin'])

    // click on page 3 button
    buttons = footer.querySelectorAll('div.pages button')
    expect(buttons.length).toBe(4)
    await act( () => user.click(buttons[2]) )
    expectRows(table, 10, ['Roger', 'Al'])

    // click on page 4 button
    buttons = footer.querySelectorAll('div.pages button')
    expect(buttons.length).toBe(4)
    await act( () => user.click(buttons[3]) )
    expectRows(table, 4, ['Bob', 'Roland'])
  }
)

function expectRows(table: HTMLTableElement, n: number, fromTo: string[]) {
  const trows = table.querySelectorAll('tbody tr')
  expect(trows.length).toBe(n)
  expectName(trows[0], fromTo[0])
  expectName(trows[n - 1], fromTo[1])
}

function expectName(row: Element, name: string) {
  const tds = row.querySelectorAll('td')
  expect(tds[1]).toHaveTextContent(name)
}
