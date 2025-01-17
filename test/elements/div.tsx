import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Div } from '@/src/index'

test(
  'div with content',
  async () => {
    const { container } = render(<Div content="Hello World"/>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World')
  }
)

test(
  'div with children',
  async () => {
    const { container } = render(<Div>Hello World!</Div>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World!')
  }
)

test(
  'div with border',
  async () => {
    const { container } = render(<Div border>Hello World!</Div>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World!')
    expect(div).toHaveClass('border')
  }
)

test(
  'div with border=2',
  async () => {
    const { container } = render(<Div border={2}>Hello World!</Div>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World!')
    expect(div).toHaveClass('border')
    expect(div).toHaveClass('bdw-2')
  }
)