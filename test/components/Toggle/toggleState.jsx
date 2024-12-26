import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { ToggleState } from '@/src/index.jsx'

const ToggleStateExample = () => {
  const options = [
    { text: 'Hot',  color: 'red'  },
    { text: 'Cold', color: 'blue' },
  ]
  const [selected, setSelected] = React.useState(options[0])
  return (
    <>
      <ToggleState
        options={options}
        onSelect={setSelected}
      />
      <div data-testid="selected">
        You selected: {selected.text}
      </div>
    </>
  )
}

test(
  'toggleState',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <ToggleStateExample/>
    )
    const buttons = container.querySelectorAll('div.buttons button')
    expect(buttons.length).toBe(2)

    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('You selected: Hot')

    // click on second button
    await act( () => user.click(buttons[1]) )
    expect(selected).toHaveTextContent('You selected: Cold')

    // click on first button
    const buttons2 = container.querySelectorAll('div.buttons button')
    expect(buttons2.length).toBe(2)
    await act( () => user.click(buttons2[0]) )
    expect(selected).toHaveTextContent('You selected: Hot')
  }
)

