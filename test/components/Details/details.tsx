import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Details } from '@/src/index'
import { fail } from '@abw/badger-utils'

test(
  'open and close',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Details summary="Hello" content="World"/>
    )
    const details = container.querySelector('div.details') || fail('no details')
    expect(details).toBeTruthy()

    const summary = details.querySelector('div.summary') || fail('no summary')
    expect(summary).toBeTruthy()
    expect(summary).toHaveTextContent('Hello')

    const divs1 = details.querySelectorAll('div')
    expect(divs1.length).toBe(1)

    // open
    await user.click(summary)

    const divs2 = details.querySelectorAll('div')
    expect(divs2.length).toBe(2)
    expect(divs2[1]).toHaveTextContent('World')

    // and close again
    await user.click(summary)
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
    const details = container.querySelector('details') || fail('no defails')
    expect(details).toBeTruthy()

    const summary = details.querySelector('summary') || fail('no summary')
    expect(summary).toBeTruthy()
    expect(summary).toHaveTextContent('Hello')

    const divs1 = details.querySelectorAll('div')
    expect(divs1.length).toBe(1)

    // open
    await user.click(summary)
    expect(details).toHaveAttribute('open')

    // and close again
    await user.click(summary)
    expect(details).not.toHaveAttribute('open')
  }
)
