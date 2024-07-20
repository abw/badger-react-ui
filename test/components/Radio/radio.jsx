import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Radio } from '@/src/index.jsx'

const RadioExample = () => {
  const [value, setValue] = React.useState(false)
  return (
    <>
      <Radio
        value={value}
        onChange={setValue}
        options={[
          'David',
          'Nigel',
          'Derek',
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
  'radio button select',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <RadioExample/>
    )
    const radio = container.querySelector('div.radioset')
    const labels = radio.querySelectorAll('label.radio')
    expect(labels.length).toBe(3)

    expect(labels[0]).toHaveTextContent('David')
    expect(labels[1]).toHaveTextContent('Nigel')
    expect(labels[2]).toHaveTextContent('Derek')

    // click on first label
    await act( () => user.click(labels[0]) )
    expect(screen.getByTestId('selected')).toHaveTextContent('You selected: David')

    // click on second label
    await act( () => user.click(labels[1]) )
    expect(screen.getByTestId('selected')).toHaveTextContent('You selected: Nigel')

    // click on third label
    await act( () => user.click(labels[2]) )
    expect(screen.getByTestId('selected')).toHaveTextContent('You selected: Derek')
  }
)
