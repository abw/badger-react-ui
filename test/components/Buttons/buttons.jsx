import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Buttons, Button } from '@/src/index.jsx'

test(
  'should render buttons',
  async () => {
    const { container } = render(
      <Buttons
        buttons={[
          { text: 'one', id: 'one' },
          { text: 'two', id: 'two' }
        ]}
      />
    )

    const buttons = container.querySelector('div.buttons')
    const button1 = buttons.querySelector('#one')
    const button2 = buttons.querySelector('#two')

    expect(button1).toHaveTextContent('one')
    expect(button2).toHaveTextContent('two')
  }
)

test(
  'should render children',
  async () => {
    const { container } = render(
      <Buttons>
        <Button text="one" id="one"/>
        <Button text="two" id="two"/>
      </Buttons>
    )

    const buttons = container.querySelector('div.buttons')
    const button1 = buttons.querySelector('#one')
    const button2 = buttons.querySelector('#two')

    expect(button1).toHaveTextContent('one')
    expect(button2).toHaveTextContent('two')
  }
)
