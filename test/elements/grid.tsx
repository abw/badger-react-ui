import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Grid } from '@/src/index'

test(
  'grid with children',
  async () => {
    const { container } = render(<Grid>Hello World!</Grid>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World!')
    expect(div).toHaveClass('grid-1')
  }
)

test(
  'grid with columns',
  async () => {
    const { container } = render(<Grid cols={2}>Hello World!</Grid>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World!')
    expect(div).toHaveClass('grid-2')
  }
)

test(
  'grid with columns, gap and alignment',
  async () => {
    const { container } = render(<Grid cols={2} gap={4} start middle>Hello World!</Grid>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World!')
    expect(div).toHaveClass('grid-2')
    expect(div).toHaveClass('gap-4')
    expect(div).toHaveClass('middle')
    expect(div).toHaveClass('start')
  }
)

