import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Buttons, Button } from '@/src/index'
import { fail } from '@abw/badger-utils'

test(
  'should render children',
  async () => {
    const { container } = render(
      <Buttons>
        <Button text="one" id="one"/>
        <Button text="two" id="two"/>
      </Buttons>
    )

    const buttons = container.querySelector('div.buttons') || fail('no buttons')
    const button1 = buttons.querySelector('#one')
    const button2 = buttons.querySelector('#two')

    expect(button1).toHaveTextContent('one')
    expect(button2).toHaveTextContent('two')
  }
)

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

    const buttons = container.querySelector('div.buttons') || fail('no buttons')
    const button1 = buttons.querySelector('#one')
    const button2 = buttons.querySelector('#two')

    expect(button1).toHaveTextContent('one')
    expect(button2).toHaveTextContent('two')
  }
)

test(
  'should forward properties',
  async () => {
    const { container } = render(
      <Buttons
        outline
        color="green"
        buttons={[
          { text: 'one', id: 'one' },
          { text: 'two', id: 'two' }
        ]}
      />
    )

    const buttons = container.querySelector('div.buttons') || fail('no buttons')
    const button1 = buttons.querySelector('#one')
    const button2 = buttons.querySelector('#two')

    expect(button1).toHaveTextContent('one')
    expect(button1).toHaveClass('green outline')
    expect(button2).toHaveTextContent('two')
    expect(button2).toHaveClass('green outline')
  }
)

