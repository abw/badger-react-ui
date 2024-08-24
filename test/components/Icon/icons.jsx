import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Icons } from '@/src/index.jsx'

test(
  'Icons component',
  async () => {
    const { container } = render(
      <Icons names="square check.wibble" size="large"/>
    )
    // screen.debug()
    const icons = container.querySelector('div.grid')
    const svgs = icons.querySelectorAll('svg')
    expect(svgs.length).toBe(2)
    expect(svgs[0]).toHaveClass('icon')
    expect(svgs[1]).toHaveClass('icon')
    expect(svgs[1]).toHaveClass('wibble')
  }
)
