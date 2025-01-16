import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Confirm } from '@/src/index'
import { fail } from '@abw/badger-utils'
// import { prettyDOM } from '@testing-library/dom'

test(
  'click then cancel',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Confirm/>
    )
    // should start with one button
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(1)

    // click to show 2 buttons
    const button = container.querySelector('button') || fail('no button')
    await act( () => user.click(button) )
    const buttons2 = container.querySelectorAll('button')
    expect(buttons2.length).toBe(2)

    // click on the first button to cancel
    await act( () => user.click(buttons2[0]) )
    const buttons1 = container.querySelectorAll('button')
    expect(buttons1.length).toBe(1)
  }
)

test(
  'click then confirm',
  async () => {
    const user = userEvent.setup()
    let clicked = 0
    const { container } = render(
      <Confirm onClick={() => clicked++ }/>
    )

    // should start with one button
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(1)

    // click to show 2 buttons
    const button = container.querySelector('button') || fail('no button')
    await act( () => user.click(button) )
    const buttons2 = container.querySelectorAll('button')
    expect(buttons2.length).toBe(2)

    // click on the second button to confirm
    await act( () => user.click(buttons2[1]) )
    expect(clicked).toBe(1)
  }
)

test.skip(    // element.showModal() and element.close() are not implemented
  'modal',
  async () => {
    const user = userEvent.setup()
    let clicked = 0
    const { container } = render(
      <Confirm onClick={() => clicked++ } modal/>
    )

    // should start with one button
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(1)

    // click to show modal
    const button = container.querySelector('button') || fail('no button')
    await act( () => user.click(button) )
    const modal = container.querySelectorAll('dialog')
    expect(modal).toBeTruthy()

    // click on the second button to confirm
    // await act( () => user.click(buttons2[1]) )
    // expect(clicked).toBe(1)
  }
)

test.skip(    // window.alert is not implemented
  'click with no onClick',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Confirm/>
    )

    // should start with one button
    const buttons = container.querySelectorAll('button')
    expect(buttons.length).toBe(1)

    // click to show 2 buttons
    const button = container.querySelector('button') || fail('no button')
    await act( () => user.click(button) )
    const buttons2 = container.querySelectorAll('button')
    expect(buttons2.length).toBe(2)

    // click on the second button to confirm
    await act( () => user.click(buttons2[1]) )
  }
)
