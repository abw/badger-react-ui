import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Form, CancelSubmit } from '@/src/index.jsx'

const FormExample = () => {
  const [cancel, setCancel] = React.useState('Not clicked')
  return (
    <>
      <Form
        className="relative"
      >
        <CancelSubmit
          cancel={{
            id: 'cancel-button',
            text: 'Click to Cancel',
            onClick: () => setCancel('Cancel was clicked')
          }}
        />
      </Form>
      <div data-testid="clicked">{cancel}</div>
    </>
  )
}

test(
  'form cancel',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <FormExample/>
    )
    const button = container.querySelector('#cancel-button')
    const clicked = screen.getByTestId('clicked')

    expect(button).toHaveTextContent('Click to Cancel')
    expect(clicked).toHaveTextContent('Not clicked')

    // click on the cancel button
    await act( () => user.click(button) )
    expect(clicked).toHaveTextContent('Cancel was clicked')
  }
)
