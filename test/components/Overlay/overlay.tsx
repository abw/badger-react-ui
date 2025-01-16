import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Button, Overlay } from '@/src/index'
import { useState } from 'react'
import { fail } from '@abw/badger-utils'

const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button data-testid="show" text="Show" onClick={() => setVisible(true)}/>
      <Button data-testid="hide" text="Hide" onClick={() => setVisible(false)}/>
      <div data-testid="visible">{ visible ? 'visible' : 'hidden' }</div>
      { visible &&
        <Overlay
          fixed
          flumpet="20"
          data-testid="overlay"
        >
          Hello World!
        </Overlay>
      }
    </>
  )
}

test(
  'click then cancel',
  async () => {
    const user = userEvent.setup()
    const { container } = render(<App/>)
    const show = screen.getByTestId('show')
    const hide = screen.getByTestId('hide')
    const visible = screen.getByTestId('visible')

    const overlay1 = container.querySelector('div.overlay')
    expect(visible).toHaveTextContent('hidden')
    expect(overlay1).toBeNull()

    // click to show overlay
    await act( () => user.click(show) )
    expect(visible).toHaveTextContent('visible')

    const overlay2 = container.querySelector('div.overlay') || fail('no overlay')
    expect(overlay2).toHaveTextContent('Hello World!')

    // click to hide overlay
    await act( () => user.click(hide) )
    expect(visible).toHaveTextContent('hidden')
    const overlay3 = container.querySelector('div.overlay')
    expect(overlay3).toBeNull()

  }
)