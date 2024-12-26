import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Toggle } from '@/src/index.jsx'

const ToggleValue = () => {
  const [selected, setSelected] = React.useState('blue')
  return (
    <div className="grid-1 gap-4">
      <Toggle
        options={[
          { text: 'Red',   value: 'red',   color: 'red'   },
          { text: 'Green', value: 'green', color: 'green' },
          { text: 'Blue',  value: 'blue',  color: 'blue'  },
        ]}
        selected={selected}
        onSelect={ option => setSelected(option.value) }
      />
      <div data-testid="selected">
        {selected}
      </div>
    </div>
  )
}

const ToggleObject = () => {
  const options = [
    { text: 'Red',   value: 'red',   color: 'red'   },
    { text: 'Green', value: 'green', color: 'green' },
    { text: 'Blue',  value: 'blue',  color: 'blue'  },
  ]
  const [selected, setSelected] = React.useState(options[2])
  return (
    <div className="grid-1 gap-4">
      <Toggle
        options={options}
        selected={selected}
        onSelect={setSelected}
      />
      <div data-testid="selected">
        {selected.text}
      </div>
    </div>
  )
}

test(
  'toggle with value selected',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <ToggleValue/>
    )
    const buttons = container.querySelectorAll('div.buttons button')
    expect(buttons.length).toBe(3)

    expect(buttons[0]).toHaveTextContent('Red')
    expect(buttons[1]).toHaveTextContent('Green')
    expect(buttons[2]).toHaveTextContent('Blue')
    expect(buttons[0]).toHaveValue('red')
    expect(buttons[1]).toHaveValue('green')
    expect(buttons[2]).toHaveValue('blue')
    expect(buttons[0]).toHaveClass('outline')
    expect(buttons[1]).toHaveClass('outline')
    expect(buttons[2]).not.toHaveClass('outline')

    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('blue')

    // click on first button
    await act( () => user.click(buttons[0]) )
    expect(selected).toHaveTextContent('red')
    expect(buttons[0]).not.toHaveClass('outline')
    expect(buttons[1]).toHaveClass('outline')
    expect(buttons[2]).toHaveClass('outline')

    // click on second button
    await act( () => user.click(buttons[1]) )
    expect(selected).toHaveTextContent('green')
    expect(buttons[0]).toHaveClass('outline')
    expect(buttons[1]).not.toHaveClass('outline')
    expect(buttons[2]).toHaveClass('outline')
  }
)

test(
  'toggle with object selected',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <ToggleObject/>
    )
    const buttons = container.querySelectorAll('div.buttons button')
    expect(buttons.length).toBe(3)

    expect(buttons[0]).toHaveTextContent('Red')
    expect(buttons[1]).toHaveTextContent('Green')
    expect(buttons[2]).toHaveTextContent('Blue')
    expect(buttons[0]).toHaveValue('red')
    expect(buttons[1]).toHaveValue('green')
    expect(buttons[2]).toHaveValue('blue')
    expect(buttons[0]).toHaveClass('outline')
    expect(buttons[1]).toHaveClass('outline')
    expect(buttons[2]).not.toHaveClass('outline')

    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('Blue')

    // click on first button
    await act( () => user.click(buttons[0]) )
    expect(selected).toHaveTextContent('Red')
    expect(buttons[0]).not.toHaveClass('outline')
    expect(buttons[1]).toHaveClass('outline')
    expect(buttons[2]).toHaveClass('outline')

    // click on second button
    await act( () => user.click(buttons[1]) )
    expect(selected).toHaveTextContent('Green')
    expect(buttons[0]).toHaveClass('outline')
    expect(buttons[1]).not.toHaveClass('outline')
    expect(buttons[2]).toHaveClass('outline')
  }
)
