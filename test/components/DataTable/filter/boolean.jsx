import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index'
// import { screen } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'

const rows = [
  { name: 'Alan',    isadmin: true,  isdev: true  },
  { name: 'Brian',   isadmin: false, isdev: true },
  { name: 'Charlie', isadmin: 1,     isdev: false  },
  { name: 'Diana',   isadmin: 0,     isdev: false },
  { name: 'Edwina',  isadmin: '1',   isdev: true  },
  { name: 'Frannie', isadmin: '0',   isdev: false },
  { name: 'Gertrude', isadmin: 0,    isdev: false },
]
const columns = {
  name:    { },
  isadmin: {
    heading: 'Admin',
    type:    'boolean',
  },
  isdev:   {
    heading:   'Developer',
    type:      'boolean',
    trueText:  'Developer',
    falseText: 'Mortal'
  },
}

const DataTableExample = () =>
  <DataTable
    rows={rows}
    columns={columns}
  />

it(
  'boolean filter - select true',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTableExample/>)

    const datatable = container.querySelector('section.datatable')
    const header = datatable.querySelector('header')
    const table = datatable.querySelector('table')

    // There should be 7 rows in the body
    const trows = table.querySelectorAll('tbody tr')
    expect(trows.length).toBe(7)

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

    // The second one should contain 3 <th> elements
    const ths = theads[1].querySelectorAll('th')
    expect(ths.length).toBe(3)

    // The second <th> should be the "Admin" pulldown
    const admin = ths[1]

    // It should contain a Select component which is initially closed
    const select = admin.querySelector('div.select')
    expect(select).toBeDefined()
    expect(select).toHaveClass('closed')

    // Click on the select inputs to open it
    const inputs = select.querySelector('div.inputs')
    expect(inputs).toBeDefined()
    await act( () => user.click(inputs) )
    expect(select).toHaveClass('open')

    // There should now be a menu
    const menu = select.querySelector('div.menu')
    expect(menu).toBeDefined()

    // There should be two items
    const items = menu.querySelectorAll('div.item')
    expect(items.length).toBe(2)

    // The first item should be True
    const trueItem = items[0]
    expect(trueItem).toHaveTextContent('True')

    // Click on the item, and only 3 rows should be displayed
    await act( () => user.click(trueItem) )
    const trowsTrue = table.querySelectorAll('tbody tr')
    expect(trowsTrue.length).toBe(3)

    // They should be Alan, Charlie and Edwina
    expectRowNameAdmin(trowsTrue[0], 'Alan', 'True')
    expectRowNameAdmin(trowsTrue[1], 'Charlie', 'True')
    expectRowNameAdmin(trowsTrue[2], 'Edwina', 'True')
  }
)

it(
  'boolean filter - select false',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTableExample/>)

    const datatable = container.querySelector('section.datatable')
    const header = datatable.querySelector('header')
    const table = datatable.querySelector('table')

    // There should be 7 rows in the body
    const trows = table.querySelectorAll('tbody tr')
    expect(trows.length).toBe(7)

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

    // The second one should contain 3 <th> elements
    const ths = theads[1].querySelectorAll('th')
    expect(ths.length).toBe(3)

    // The second <th> should be the "Admin" pulldown
    const admin = ths[1]

    // It should contain a Select component which is initially closed
    const select = admin.querySelector('div.select')
    expect(select).toBeDefined()
    expect(select).toHaveClass('closed')

    // Click on the select inputs to open it
    const inputs = select.querySelector('div.inputs')
    expect(inputs).toBeDefined()
    await act( () => user.click(inputs) )
    expect(select).toHaveClass('open')

    // There should now be a menu
    const menu = select.querySelector('div.menu')
    expect(menu).toBeDefined()

    // There should be two items
    const items = menu.querySelectorAll('div.item')
    expect(items.length).toBe(2)

    // The second item should be False
    const falseItem = items[1]
    expect(falseItem).toHaveTextContent('False')

    // Click on the item, and only 4 rows should be displayed
    await act( () => user.click(falseItem) )
    const trowsFalse = table.querySelectorAll('tbody tr')
    expect(trowsFalse.length).toBe(4)

    // They should be Brian, Diana, Frannie and Gertrude
    expectRowNameAdmin(trowsFalse[0], 'Brian', 'False')
    expectRowNameAdmin(trowsFalse[1], 'Diana', 'False')
    expectRowNameAdmin(trowsFalse[2], 'Frannie', 'False')
    expectRowNameAdmin(trowsFalse[3], 'Gertrude', 'False')
  }
)

it(
  'boolean filter - select developer',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTableExample/>)

    const datatable = container.querySelector('section.datatable')
    const header = datatable.querySelector('header')
    const table = datatable.querySelector('table')

    // There should be 7 rows in the body
    const trows = table.querySelectorAll('tbody tr')
    expect(trows.length).toBe(7)

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

    // The second one should contain 3 <th> elements
    const ths = theads[1].querySelectorAll('th')
    expect(ths.length).toBe(3)

    // The third <th> should be the "Developer" pulldown
    const admin = ths[2]

    // It should contain a Select component which is initially closed
    const select = admin.querySelector('div.select')
    expect(select).toBeDefined()
    expect(select).toHaveClass('closed')

    // Click on the select inputs to open it
    const inputs = select.querySelector('div.inputs')
    expect(inputs).toBeDefined()
    await act( () => user.click(inputs) )
    expect(select).toHaveClass('open')

    // There should now be a menu
    const menu = select.querySelector('div.menu')
    expect(menu).toBeDefined()

    // There should be two items
    const items = menu.querySelectorAll('div.item')
    expect(items.length).toBe(2)

    // The first item should be "Developer"
    const devItem = items[0]
    expect(devItem).toHaveTextContent('Developer')

    // Click on the item, and only 3 rows should be displayed
    await act( () => user.click(devItem) )
    const trowsDev = table.querySelectorAll('tbody tr')
    expect(trowsDev.length).toBe(3)

    // They should be Alan, Brian and Edwina
    expectRowNameDeveloper(trowsDev[0], 'Alan', 'Developer')
    expectRowNameDeveloper(trowsDev[1], 'Brian', 'Developer')
    expectRowNameDeveloper(trowsDev[2], 'Edwina', 'Developer')
  }
)

it(
  'boolean filter - select mortal',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTableExample/>)

    const datatable = container.querySelector('section.datatable')
    const header = datatable.querySelector('header')
    const table = datatable.querySelector('table')

    // There should be 7 rows in the body
    const trows = table.querySelectorAll('tbody tr')
    expect(trows.length).toBe(7)

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

    // The second one should contain 3 <th> elements
    const ths = theads[1].querySelectorAll('th')
    expect(ths.length).toBe(3)

    // The third <th> should be the "Developer" pulldown
    const admin = ths[2]

    // It should contain a Select component which is initially closed
    const select = admin.querySelector('div.select')
    expect(select).toBeDefined()
    expect(select).toHaveClass('closed')

    // Click on the select inputs to open it
    const inputs = select.querySelector('div.inputs')
    expect(inputs).toBeDefined()
    await act( () => user.click(inputs) )
    expect(select).toHaveClass('open')

    // There should now be a menu
    const menu = select.querySelector('div.menu')
    expect(menu).toBeDefined()

    // There should be two items
    const items = menu.querySelectorAll('div.item')
    expect(items.length).toBe(2)

    // The second item should be "Mortal"
    const mortalItem = items[1]
    expect(mortalItem).toHaveTextContent('Mortal')

    // Click on the item, and only 4 rows should be displayed
    await act( () => user.click(mortalItem) )
    const trowsMortal = table.querySelectorAll('tbody tr')
    expect(trowsMortal.length).toBe(4)

    // They should be Charlie, Diana, Frannie and Gertrude
    expectRowNameDeveloper(trowsMortal[0], 'Charlie', 'Mortal')
    expectRowNameDeveloper(trowsMortal[1], 'Diana', 'Mortal')
    expectRowNameDeveloper(trowsMortal[2], 'Frannie', 'Mortal')
    expectRowNameDeveloper(trowsMortal[3], 'Gertrude', 'Mortal')
  }
)

function expectRowNameAdmin(row, name, admin) {
  const tds = row.querySelectorAll('td')
  expect(tds[0]).toHaveTextContent(name)
  expect(tds[1]).toHaveTextContent(admin)
}

function expectRowNameDeveloper(row, name, developer) {
  const tds = row.querySelectorAll('td')
  expect(tds[0]).toHaveTextContent(name)
  expect(tds[2]).toHaveTextContent(developer)
}