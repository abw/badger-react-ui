import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Button } from '@/src/index'
import { fail } from '@abw/badger-utils'

test(
  'should render button',
  async () => {
    const { container } = render(
      <Button text="Hello World" id="button1"/>
    )
    const button1 = container.querySelector('#button1')
    expect(button1).toHaveTextContent('Hello World')
  }
)

test(
  'should add color class',
  async () => {
    const { container } = render(
      <Button
        text="Hello World"
        color="blue"
        id="button1"
      />
    )
    const button1 = container.querySelector('#button1')
    expect(button1).toHaveTextContent('Hello World')
    expect(button1).toHaveClass('blue')
  }
)

test(
  'should add size class',
  async () => {
    const { container } = render(
      <Button
        text="Hello World"
        size="large"
        id="button1"
      />
    )
    const button1 = container.querySelector('#button1')
    expect(button1).toHaveTextContent('Hello World')
    expect(button1).toHaveClass('large')
  }
)

test(
  'should add onClick handler',
  async () => {
    let n = 0
    const user = userEvent.setup()
    const { container } = render(
      <Button
        text="Hello World"
        onClick={() => n++}
        id="button1"
      />
    )
    const button1 = container.querySelector('#button1') || fail('no button')
    expect(button1).toHaveTextContent('Hello World')

    await user.click(button1)
    expect(n).toBe(1)

    await user.click(button1)
    expect(n).toBe(2)
  }
)
