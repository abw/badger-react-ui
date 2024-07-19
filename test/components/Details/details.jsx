import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Details } from '@/src/index.jsx'
// import { prettyDOM } from '@testing-library/dom'

test(
  'open and close',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Details summary="Hello" content="World"/>
    )
    const details = container.querySelector('div.details')
    expect(details).toBeTruthy()

    const summary = details.querySelector('div.summary')
    expect(summary).toBeTruthy()
    expect(summary).toHaveTextContent('Hello')

    const divs1 = details.querySelectorAll('div')
    expect(divs1.length).toBe(1)

    // open
    await act( () => user.click(summary) )

    const divs2 = details.querySelectorAll('div')
    expect(divs2.length).toBe(2)
    expect(divs2[1]).toHaveTextContent('World')

    // and close again
    await act( () => user.click(summary) )
    const divs3 = details.querySelectorAll('div')
    expect(divs3.length).toBe(1)
  }
)

test(
  'native',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Details summary="Hello" content="World" native/>
    )
    // should start with one button
    const details = container.querySelector('details')
    expect(details).toBeTruthy()

    const summary = details.querySelector('summary')
    expect(summary).toBeTruthy()
    expect(summary).toHaveTextContent('Hello')

    const divs1 = details.querySelectorAll('div')
    expect(divs1.length).toBe(1)

    // open
    await act( () => user.click(summary) )
    expect(details).toHaveAttribute('open')

    // and close again
    await act( () => user.click(summary) )
    expect(details).not.toHaveAttribute('open')
  }
)
