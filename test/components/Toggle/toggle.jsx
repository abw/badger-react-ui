import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Toggle } from '@/src/index.jsx'

const ToggleOne = () => {
  const [selected, setSelected] = React.useState(0)
  return (
    <div className="grid-1 gap-4">
      <Toggle
        selected={selected}
        onSelect={(option, n) => setSelected(n)}
      />
      <div data-testid="selected">
        {selected}
      </div>
    </div>
  )
}

const ToggleTwo = () => {
  const [selected, setSelected] = React.useState(0)
  return (
    <div className="grid-1 gap-4">
      <Toggle
        options={[
          { text: 'Red',   color: 'red'   },
          { text: 'Green', color: 'green' },
          { text: 'Blue',  color: 'blue'  },
        ]}
        selected={selected}
        onSelect={(option, n) => setSelected(n)}
      />
      <div data-testid="selected">
        {selected}
      </div>
    </div>
  )
}

test(
  'toggle with default buttons',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <ToggleOne/>
    )
    const buttons = container.querySelectorAll('div.buttons button')
    expect(buttons.length).toBe(2)

    expect(buttons[0]).toHaveTextContent('On')
    expect(buttons[0]).toHaveValue('true')
    expect(buttons[0]).not.toHaveClass('outline')
    expect(buttons[1]).toHaveTextContent('Off')
    expect(buttons[1]).toHaveValue('false')
    expect(buttons[1]).toHaveClass('outline')

    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('0')

    // click on second button
    await act( () => user.click(buttons[1]) )
    expect(selected).toHaveTextContent('1')
    expect(buttons[0]).toHaveClass('outline')
    expect(buttons[1]).not.toHaveClass('outline')

    // click on first button again
    await act( () => user.click(buttons[0]) )
    expect(selected).toHaveTextContent('0')
    expect(buttons[0]).not.toHaveClass('outline')
    expect(buttons[1]).toHaveClass('outline')
  }
)

test(
  'toggle with custom buttons',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <ToggleTwo/>
    )
    const buttons = container.querySelectorAll('div.buttons button')
    expect(buttons.length).toBe(3)

    expect(buttons[0]).toHaveTextContent('Red')
    expect(buttons[1]).toHaveTextContent('Green')
    expect(buttons[2]).toHaveTextContent('Blue')
    expect(buttons[0]).toHaveClass('red')
    expect(buttons[1]).toHaveClass('green')
    expect(buttons[2]).toHaveClass('blue')
    expect(buttons[0]).not.toHaveClass('outline')
    expect(buttons[1]).toHaveClass('outline')
    expect(buttons[2]).toHaveClass('outline')

    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('0')

    // click on second button
    await act( () => user.click(buttons[1]) )
    expect(selected).toHaveTextContent('1')
    expect(buttons[0]).toHaveClass('outline')
    expect(buttons[1]).not.toHaveClass('outline')
    expect(buttons[2]).toHaveClass('outline')

    // click on third button again
    await act( () => user.click(buttons[2]) )
    expect(selected).toHaveTextContent('2')
    expect(buttons[0]).toHaveClass('outline')
    expect(buttons[1]).toHaveClass('outline')
    expect(buttons[2]).not.toHaveClass('outline')
  }
)

