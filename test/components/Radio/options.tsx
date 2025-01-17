import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Radio } from '@/src/index'
import { fail } from '@abw/badger-utils'

const RadioExample = () => {
  const [value, setValue] = React.useState<string>()
  const safelySetValue = (value: unknown) => setValue(
    typeof value === 'string'
      ? value
      : ''
  )
  return (
    <>
      <Radio
        value={value}
        onChange={safelySetValue}
        options={[
          { value: 'david', text:  'David St. Hubbins' },
          { value: 'nigel', label: 'Nigel Tufnel' },
          { value: 'derek', name:  'Derek Smalls' },
          { value: 'mick',  name:  'Mick Shrimpton', disabled: true }
        ]}
      />
      { value &&
        <div data-testid="selected">
          You selected: {value}
        </div>
      }
    </>
  )
}

test(
  'radio button options select',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <RadioExample/>
    )
    const radio = container.querySelector('div.radioset') || fail('no radioset')
    const labels = radio.querySelectorAll('label.radio')
    expect(labels.length).toBe(4)

    expect(labels[0]).toHaveTextContent('David St. Hubbins')
    expect(labels[1]).toHaveTextContent('Nigel Tufnel')
    expect(labels[2]).toHaveTextContent('Derek Smalls')
    expect(labels[3]).toHaveTextContent('Mick Shrimpton')
    expect(labels[3]).toHaveClass('disabled')

    const option2Input = labels[3].querySelector('input') || fail('no input')
    expect(option2Input).toHaveAttribute('aria-disabled', 'true')

    // screen.debug()

    // click on first label
    await act( () => user.click(labels[0]) )
    expect(screen.getByTestId('selected')).toHaveTextContent('You selected: david')

    // click on second label
    await act( () => user.click(labels[1]) )
    expect(screen.getByTestId('selected')).toHaveTextContent('You selected: nigel')

    // click on third label
    await act( () => user.click(labels[2]) )
    expect(screen.getByTestId('selected')).toHaveTextContent('You selected: derek')

    // click on fourth input should do nothing - note that userEvent will
    // ignore click events on a disabled input, but if we click on the label
    // it incorrectly fires the event on the associated input.
    await act( () => user.click(option2Input) )
    expect(screen.getByTestId('selected')).toHaveTextContent('You selected: derek')
  }
)
