import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { DataTable } from '@/src/index.jsx'

const DataTableExample = () =>
  <DataTable
    rows={[
      { name: 'Alan'    },
      { name: 'Brian'   },
      { name: 'Charlie' },
    ]}
    columns={{
      name:   { },
    }}
  />

test(
  'datatable text columns',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DataTableExample/>
    )
    const datatable = container.querySelector('section.datatable')
    const table = datatable.querySelector('table')

    // There should be one heading
    const heading = table.querySelector('thead > tr > th')
    expect(heading).toBeTruthy()

    // There should be 3 rows in the body
    const trows = table.querySelectorAll('tbody tr')
    expect(trows.length).toBe(3)

    expect(trows[0].querySelector('td')).toHaveTextContent('Alan')
    expect(trows[1].querySelector('td')).toHaveTextContent('Brian')
    expect(trows[2].querySelector('td')).toHaveTextContent('Charlie')

    // click on heading to sort down
    await act( () => user.click(heading) )
    const trowsDown = table.querySelectorAll('tbody tr')
    expect(trowsDown.length).toBe(3)
    expect(trowsDown[0].querySelector('td')).toHaveTextContent('Alan')
    expect(trowsDown[1].querySelector('td')).toHaveTextContent('Brian')
    expect(trowsDown[2].querySelector('td')).toHaveTextContent('Charlie')

    // click on heading again to sort up
    await act( () => user.click(heading) )
    const trowsUp = table.querySelectorAll('tbody tr')
    expect(trowsUp.length).toBe(3)
    expect(trowsUp[0].querySelector('td')).toHaveTextContent('Charlie')
    expect(trowsUp[1].querySelector('td')).toHaveTextContent('Brian')
    expect(trowsUp[2].querySelector('td')).toHaveTextContent('Alan')
  }
)
