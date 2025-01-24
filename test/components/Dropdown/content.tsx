import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Dropdown } from '@/src/index'
import { fail } from '@abw/badger-utils'

const DropdownExample = () =>
  <Dropdown
    text='Dropdown'
    content='Hello World!'
  />

test(
  'Dropdown with content',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <DropdownExample/>
    )

    const dropdown = container.querySelector('div.dropdown') || fail('no dropdown')

    screen.debug()
    const trigger = dropdown.querySelector('div.trigger') || fail('no trigger')
    expect(trigger).toHaveTextContent('Dropdown')

    const nobody = dropdown.querySelector('div.body')
    expect(nobody).toBeNull()

    await user.click(trigger)
    const somebody = dropdown.querySelector('div.body')
    expect(somebody).toBeTruthy()
    expect(somebody).toHaveTextContent('Hello World!')
  }
)
