import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableCell } from '@/src/index'
import { ReactNode } from 'react'

export const TableWrapper = ({ children }: { children: ReactNode }) =>
  <table>
    <tbody>
      <tr>
        {children}
      </tr>
    </tbody>
  </table>

test(
  'cell defaults to td',
  async () => {
    render(
      <TableWrapper>
        <TableCell
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
  'cell with explicit th',
  async () => {
    render(
      <TableWrapper>
        <TableCell
          text="Hello"
          data-testid="th"
          th
        />
      </TableWrapper>
    )
    const th = screen.getByTestId('th')
    expect(th).toHaveTextContent('Hello')
    expect(th.nodeName.toLowerCase()).toBe('th')
  }
)

test(
  'cell with number',
  async () => {
    render(
      <TableWrapper>
        <TableCell
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
  'cell th with number',
  async () => {
    render(
      <TableWrapper>
        <TableCell
          text={11}
          data-testid="th"
          th
        />
      </TableWrapper>
    )
    const th = screen.getByTestId('th')
    expect(th).toHaveTextContent('11')
    expect(th.nodeName.toLowerCase()).toBe('th')
  }
)

test(
  'cell with text and className',
  async () => {
    render(
      <TableWrapper>
        <TableCell
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
  'cell th with text and className',
  async () => {
    render(
      <TableWrapper>
        <TableCell
          text="Hello"
          className="wibble"
          data-testid="th"
          th
        />
      </TableWrapper>
    )
    const th = screen.getByTestId('th')
    expect(th).toHaveTextContent('Hello')
    expect(th).toHaveClass('wibble')
    expect(th.nodeName.toLowerCase()).toBe('th')
  }
)

test(
  'cell function',
  async () => {
    render(
      <TableWrapper>
        <TableCell
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

test(
  'cell th function',
  async () => {
    render(
      <TableWrapper>
        <TableCell
          text={
            ({ className }) => `You set the class to ${className}`
          }
          className="wibble"
          data-testid="th"
          th
        />
      </TableWrapper>
    )
    const th = screen.getByTestId('th')
    expect(th).toHaveTextContent('You set the class to wibble')
    expect(th.nodeName.toLowerCase()).toBe('th')
  }
)
