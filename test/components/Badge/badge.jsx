import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Badge } from '@/src/index.jsx'

test(
  'should render badge',
  async () => {
    const { container } = render(
      <Badge text="Hello World" id="badge1"/>
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveClass('badge')
    expect(badge1).toHaveTextContent('Hello World')
  }
)

test(
  'should add color class',
  async () => {
    const { container } = render(
      <Badge
        text="Hello World"
        color="blue"
        id="badge1"
      />
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveTextContent('Hello World')
    expect(badge1).toHaveClass('blue')
    expect(badge1).toHaveClass('badge')
  }
)

test(
  'should add size class',
  async () => {
    const { container } = render(
      <Badge
        text="Hello World"
        size="large"
        id="badge1"
      />
    )
    const badge1 = container.querySelector('#badge1')
    expect(badge1).toHaveTextContent('Hello World')
    expect(badge1).toHaveClass('large')
    expect(badge1).toHaveClass('badge')
  }
)
