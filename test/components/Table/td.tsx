import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableTd } from '@/src/index'
import { TableWrapper } from './cell'

test(
  'td text',
  async () => {
    render(
      <TableWrapper>
        <TableTd
          text="Hello"
          data-testid="td"
        />
      </TableWrapper>
    )
    const td = screen.getByTestId('td')
    expect(td).toHaveTextContent('Hello')
  }
)

test(
  'td number',
  async () => {
    render(
      <TableWrapper>
        <TableTd
          text={11}
          data-testid="td"
        />
      </TableWrapper>
    )
    const td = screen.getByTestId('td')
    expect(td).toHaveTextContent('11')
  }
)

test(
  'td text and className',
  async () => {
    render(
      <TableWrapper>
        <TableTd
          text="Hello"
          className="wibble"
          data-testid="td"
        />
      </TableWrapper>
    )
    const td = screen.getByTestId('td')
    expect(td).toHaveTextContent('Hello')
    expect(td).toHaveClass('wibble')
  }
)

test(
  'td function',
  async () => {
    render(
      <TableWrapper>
        <TableTd
          text={
            ({ className }) => `You set the class to ${className}`
          }
          className="wibble"
          data-testid="td"
        />
      </TableWrapper>
    )
    const td = screen.getByTestId('td')
    expect(td).toHaveTextContent('You set the class to wibble')
  }
)
