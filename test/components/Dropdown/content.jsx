import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Dropdown } from '@/src/index.jsx'

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

    const dropdown = container.querySelector('div.dropdown')

    const trigger = dropdown.querySelector('div.trigger')
    expect(trigger).toHaveTextContent('Dropdown')

    const nobody = dropdown.querySelector('div.body')
    expect(nobody).toBeNull()

    await act( () => user.click(trigger) )
    const somebody = dropdown.querySelector('div.body')
    expect(somebody).toBeTruthy()
    expect(somebody).toHaveTextContent('Hello World!')
  }
)
