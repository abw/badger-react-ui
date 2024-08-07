import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Alert } from '@/src/index.jsx'
// import { prettyDOM } from '@testing-library/dom'

test(
  'alert with children',
  async () => {
    render(
      <div data-testid="alert-container">
        <Alert>
          This is an alert
        </Alert>
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveTextContent('This is an alert')
  }
)

test(
  'alert with text',
  async () => {
    render(
      <div data-testid="alert-container">
        <Alert text="This is an alert"/>
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveTextContent('This is an alert')
  }
)

test(
  'alert with text and title',
  async () => {
    render(
      <div data-testid="alert-container">
        <Alert title="Testing" text="This is an alert"/>
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    const title = alert.querySelector('h3')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveTextContent('This is an alert')
    expect(title).toHaveTextContent('Testing')
  }
)

test(
  'alert with headline and text',
  async () => {
    render(
      <div data-testid="alert-container">
        <Alert headline="Testing" text="This is an alert"/>
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    const headline = alert.querySelector('div')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveTextContent('This is an alert')
    expect(headline).toHaveTextContent('Testing')
    expect(headline).toHaveClass('headline')
  }
)

test(
  'alert with headline and headIcon',
  async () => {
    render(
      <div data-testid="alert-container">
        <Alert headline="Testing" headIcon="bars" text="This is an alert"/>
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    const headline = alert.querySelector('div')
    const svg = headline.querySelector('svg')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveTextContent('This is an alert')
    expect(headline).toHaveTextContent('Testing')
    expect(headline).toHaveClass('headline')
    expect(svg).toBeDefined()
    expect(svg).toHaveClass('icon')
    // console.log(prettyDOM(alert))
  }
)

test(
  'alert with headline and headicon',
  async () => {
    render(
      <div data-testid="alert-container">
        <Alert headline="Testing" headicon="bars" text="This is an alert"/>
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    const headline = alert.querySelector('div')
    const svg = headline.querySelector('svg')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveTextContent('This is an alert')
    expect(headline).toHaveTextContent('Testing')
    expect(headline).toHaveClass('headline')
    expect(svg).toBeTruthy()
    expect(svg).toHaveClass('icon')
    // console.log(prettyDOM(alert))
  }
)

test(
  'alert with icon',
  async () => {
    render(
      <div data-testid="alert-container">
        <Alert text="This is an alert" icon="info"/>
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    const svg = alert.querySelector('svg')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveTextContent('This is an alert')
    expect(svg).toBeTruthy()
    expect(svg).toHaveClass('icon')
    // console.log(prettyDOM(alert))
  }
)

test(
  'revealable alert',
  async () => {
    const user = userEvent.setup()
    render(
      <div data-testid="alert-container">
        <Alert text="This is an alert" headline="Click Me!" revealable/>
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    const headline = alert.querySelector('div')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveClass('revealable')
    expect(headline).toHaveTextContent('Click Me!')
    expect(headline).toHaveClass('headline')

    const svg = headline.querySelector('svg')
    expect(svg).toBeTruthy()
    expect(svg).toHaveClass('icon')

    await act( () => user.click(headline) )
    // console.log(prettyDOM(alert))
    expect(alert).toHaveClass('revealed')
    expect(alert).toHaveTextContent('This is an alert')
  }
)

test(
  'dismissable alert',
  async () => {
    const user = userEvent.setup()
    let dismissed = false
    render(
      <div data-testid="alert-container">
        <Alert
          text="This is an alert"
          headline="Click Me!"
          dismissable
          onDismiss={() => dismissed = true}
        />
      </div>
    )
    const container = screen.getByTestId('alert-container')
    const alert = container.querySelector('div')
    const headline = alert.querySelector('div')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveClass('dismissable')
    expect(headline).toHaveTextContent('Click Me!')
    expect(headline).toHaveClass('headline')

    const svg = headline.querySelector('svg')
    expect(svg).toBeTruthy()
    expect(svg).toHaveClass('icon')

    await act( () => user.click(svg) )
    const alert2 = container.querySelector('div')
    expect(alert2).toBeFalsy()
    expect(dismissed).toBe(true)
    // console.log(prettyDOM(container))
  }
)
