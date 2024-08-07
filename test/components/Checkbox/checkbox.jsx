import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Checkbox } from '@/src/index.jsx'
// import { prettyDOM } from '@testing-library/dom'

test(
  'basic checkbox',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Checkbox text="Hello"/>
    )
    const label = container.querySelector('label')
    const input = label.querySelector('input')

    expect(label).toHaveTextContent('Hello')
    expect(input.checked).toBe(false)

    await act( () => user.click(input) )
    expect(input.checked).toBe(true)

    await act( () => user.click(label) )
    expect(input.checked).toBe(false)
  }
)

const CheckboxWithState = () => {
  const [checked, setChecked] = React.useState(true)
  return (
    <Checkbox
      text="Hello"
      checked={checked}
      onChange={setChecked}
    />
  )
}
test(
  'checked checkbox',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <CheckboxWithState/>
    )
    const label = container.querySelector('label')
    const input = label.querySelector('input')

    expect(label).toHaveTextContent('Hello')
    expect(input.checked).toBe(true)

    await act( () => user.click(input) )
    expect(input.checked).toBe(false)

    await act( () => user.click(label) )
    expect(input.checked).toBe(true)
  }
)

test(
  'border checkbox',
  async () => {
    const { container } = render(
      <Checkbox text="Hello" border/>
    )
    const label = container.querySelector('label')
    expect(label).toHaveTextContent('Hello')
    expect(label).toHaveClass('border')
  }
)

test(
  'onChange checkbox',
  async () => {
    const user = userEvent.setup()
    let n = 0
    const { container } = render(
      <Checkbox
        text="Hello"
        onChange={() => n++}
      />
    )
    const label = container.querySelector('label')
    const input = label.querySelector('input')

    expect(label).toHaveTextContent('Hello')
    expect(input.checked).toBe(false)

    await act( () => user.click(label) )
    expect(input.checked).toBe(true)
    expect(n).toBe(1)

    await act( () => user.click(label) )
    expect(input.checked).toBe(false)
    expect(n).toBe(2)
  }
)
