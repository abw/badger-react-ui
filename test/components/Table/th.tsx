import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableTh } from '@/src/index'
import { TableWrapper } from './cell'

test(
  'th text',
  async () => {
    render(
      <TableWrapper>
        <TableTh
          text="Hello"
          data-testid="th"
        />
      </TableWrapper>
    )
    const th = screen.getByTestId('th')
    expect(th).toHaveTextContent('Hello')
  }
)

test(
  'th number',
  async () => {
    render(
      <TableWrapper>
        <TableTh
          text={11}
          data-testid="th"
        />
      </TableWrapper>
    )
    const th = screen.getByTestId('th')
    expect(th).toHaveTextContent('11')
  }
)

test(
  'th text and className',
  async () => {
    render(
      <TableWrapper>
        <TableTh
          text="Hello"
          className="wibble"
          data-testid="th"
        />
      </TableWrapper>
    )
    const th = screen.getByTestId('th')
    expect(th).toHaveTextContent('Hello')
    expect(th).toHaveClass('wibble')
  }
)

test(
  'th function',
  async () => {
    render(
      <TableWrapper>
        <TableTh
          text={
            ({ className }) => `You set the class to ${className}`
          }
          className="wibble"
          data-testid="th"
        />
      </TableWrapper>
    )
    const th = screen.getByTestId('th')
    expect(th).toHaveTextContent('You set the class to wibble')
  }
)
