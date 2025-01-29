import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index'
import { fail } from '@abw/badger-utils'

const rows = [
  { name: 'Alan',    isadmin: true,  isdev: true  },
  { name: 'Brian',   isadmin: false, isdev: true },
  { name: 'Charlie', isadmin: 1,     isdev: false  },
  { name: 'Diana',   isadmin: 0,     isdev: false },
  { name: 'Edwina',  isadmin: '1',   isdev: true  },
  { name: 'Frannie', isadmin: '0',   isdev: false },
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
  'click on Filter control to reveal filters',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<DataTableExample/>)

    const datatable = container.querySelector('section.datatable') || fail('no datatable')

    const header = datatable.querySelector('header') || fail('no header')
    const table = datatable.querySelector('table') || fail('no table')
    const trows = table.querySelectorAll('tbody tr')
    expect(trows.length).toBe(6)

    const controls = header.querySelectorAll('div.controls > div')
    expect(controls.length).toBe(3)

    // There should be one <thead> by default
    const theadsNoFilters = table.querySelectorAll('thead')
    expect(theadsNoFilters.length).toBe(1)

    // Clicking on the 'filters' control should cause a second <thead>
    // to be displayed
    const filters = controls[0]
    await act( () => user.click(filters) )

    const theadsWithFilters = table.querySelectorAll('thead')
    expect(theadsWithFilters.length).toBe(2)
  }
)

