import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '@/src/index.jsx'

test(
  'Icon with multiple names',
  async () => {
    const { container } = render(
      <Icon name="square check.wibble" size="large"/>
    )

    const icons = container.querySelector('div.icons')
    const svgs = icons.querySelectorAll('svg')
    expect(svgs.length).toBe(2)
    expect(svgs[0]).toHaveClass('icon')
    expect(svgs[1]).toHaveClass('icon')
    expect(svgs[1]).toHaveClass('wibble')
  }
)
