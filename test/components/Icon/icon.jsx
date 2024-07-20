import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '@/src/index.jsx'

test(
  'Icon with name, size and color',
  async () => {
    const { container } = render(
      <Icon name="check" size="large" color="green-50"/>
    )

    const icon = container.querySelector('svg')
    expect(icon).toHaveClass('icon')
    expect(icon).toHaveClass('large')
    expect(icon).toHaveClass('green')
    expect(icon).toHaveClass('fgc-50')
  }
)
