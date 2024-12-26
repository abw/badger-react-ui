import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { CheckboxState } from '@/src/index.jsx'
// import { prettyDOM } from '@testing-library/dom'

test(
  'basic checkbox',
  async () => {
    const user = userEvent.setup()
    let checked = false
    const { container } = render(
      <CheckboxState
        text="Hello"
        onChange={c => checked = c}
      />
    )
    const label = container.querySelector('label')
    const input = label.querySelector('input')

    expect(label).toHaveTextContent('Hello')
    expect(input.checked).toBe(false)
    expect(checked).toBe(false)

    await act( () => user.click(input) )
    expect(input.checked).toBe(true)
    expect(checked).toBe(true)

    await act( () => user.click(label) )
    expect(input.checked).toBe(false)
    expect(checked).toBe(false)
  }
)
