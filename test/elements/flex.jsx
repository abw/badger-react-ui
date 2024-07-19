import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Flex } from '@/src/index.jsx'

test(
  'flex with children',
  async () => {
    const { container } = render(<Flex>Hello World!</Flex>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World!')
    expect(div).toHaveClass('flex')
  }
)

test(
  'flex with alignment',
  async () => {
    const { container } = render(<Flex space middle start>Hello World!</Flex>)
    const div = container.querySelector('div')
    expect(div).toHaveTextContent('Hello World!')
    expect(div).toHaveClass('flex')
    expect(div).toHaveClass('space')
    expect(div).toHaveClass('middle')
    expect(div).toHaveClass('start')
  }
)

