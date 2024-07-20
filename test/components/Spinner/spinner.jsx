import React from 'react'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from '@/src/index.jsx'

const SpinnerExample = () =>
  <div className="x3 flex gap-3 middle wrap" data-testid="spinners">
    <Spinner/>
    <Spinner color="red"/>
    <Spinner color="orange" fill/>
    <Spinner color="yellow" fill stroke="thin"/>
    <Spinner color="green"  fill stroke="thinner" bgIcon="circle" bgStroke bgFill={false}/>
    <Spinner color="teal"   fill stroke="thinner" bgIcon="circle" bgStroke="thin"/>
    <Spinner color="blue"   fill bgIcon="circle" strokeWidth="5" reverse fillStop={90} strokeStop={60}/>
  </div>

test(
  'spinners',
  async () => {
    render(
      <SpinnerExample/>
    )
    const spinners = screen.getByTestId('spinners')
    const svgs = spinners.querySelectorAll(':scope > svg')
    expect(svgs.length).toBe(4)

    expect(svgs[0]).toHaveClass('brand spin icon')
    expect(svgs[1]).toHaveClass('red spin icon')
    expect(svgs[2]).toHaveClass('orange spin icon flc-50')
    expect(svgs[3]).toHaveClass('yellow spin icon flc-50')

    const [green, teal, blue] = spinners.querySelectorAll(':scope > div.icons')
    expect(green.querySelectorAll('svg').length).toBe(2)
    expect(teal.querySelectorAll('svg').length).toBe(2)
    expect(blue.querySelectorAll('svg').length).toBe(2)
  }
)
