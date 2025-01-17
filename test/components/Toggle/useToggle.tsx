import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { useToggle, Button } from '@/src/index'

const UseToggleExample = () => {
  const [option, Toggle, selectOption, toggleOption] = useToggle({
    options: [
      { value: 'love', text: 'Love', iconLeft: 'thumb-up'   },
      { value: 'hate', text: 'Hate', iconLeft: 'thumb-down' },
    ],
    storageKey: 'wibble'
  })
  return (
    <div className="grid-1 gap-4">
      <Toggle/>
      <div data-testid="selected">
        You {option.value} this!
      </div>
      <div className="flex gap-2 small">
        <Button
          text="Select 0"
          data-testid="select-0"
          onClick={() => selectOption(0)}
        />
        <Button
          text="Select 1"
          data-testid="select-1"
          onClick={() => selectOption(1)}
        />
        <Button
          text="Select love"
          data-testid="select-love"
          onClick={() => selectOption('love')}
        />
        <Button
          text="Select hate"
          data-testid="select-hate"
          onClick={() => selectOption('hate')}
        />
        <Button
          text="Select invalid"
          data-testid="select-invalid"
          onClick={() => selectOption('cheese')}
        />
      </div>
      <Button
        text="Toggle"
        data-testid="toggle"
        onClick={toggleOption}
      />
    </div>
  )
}

test(
  'useToggle',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <UseToggleExample/>
    )
    const selected = screen.getByTestId('selected')
    expect(selected).toHaveTextContent('You love this!')

    const select0 = screen.getByTestId('select-0')
    const select1 = screen.getByTestId('select-1')
    const selectLove = screen.getByTestId('select-love')
    const selectHate = screen.getByTestId('select-hate')
    // const selectInvalid = screen.getByTestId('select-invalid')
    const toggle = screen.getByTestId('toggle')

    await act( () => user.click(select1) )
    expect(selected).toHaveTextContent('You hate this!')

    await act( () => user.click(select0) )
    expect(selected).toHaveTextContent('You love this!')

    await act( () => user.click(selectHate) )
    expect(selected).toHaveTextContent('You hate this!')

    await act( () => user.click(selectLove) )
    expect(selected).toHaveTextContent('You love this!')

    await act( () => user.click(toggle) )
    expect(selected).toHaveTextContent('You hate this!')

    await act( () => user.click(toggle) )
    expect(selected).toHaveTextContent('You love this!')

    const buttons = container.querySelectorAll('div.buttons button')
    expect(buttons.length).toBe(2)

    expect(buttons[0]).toHaveTextContent('Love')
    expect(buttons[1]).toHaveTextContent('Hate')

    // click on second button
    await act( () => user.click(buttons[1]) )
    expect(selected).toHaveTextContent('You hate this!')

    // click on first button
    await act( () => user.click(buttons[0]) )
    expect(buttons[0]).toHaveTextContent('Love')

    // Hmmm... can't figure out the right way to test this
    // expect(
    //   async () => {
    //     await user.click(selectInvalid)
    //   }
    // ).toThrowError('Invalid toggle option selected: "cheese"')
  }
)

