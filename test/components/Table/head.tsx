import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableHead } from '@/src/index'
import { ReactNode } from 'react'

export const TableWrapper = ({ children }: { children: ReactNode }) =>
  <table>
    {children}
  </table>

test(
  'head with single row of string',
  async () => {
    render(
      <TableWrapper>
        <TableHead
          headRows={[
            ['foo', 'bar', 'baz'],
          ]}
          data-testid="thead"
        />
      </TableWrapper>
    )
    const thead = screen.getByTestId('thead')
    const trs = thead.querySelectorAll('tr')
    expect(trs.length).toBe(1)
    const ths1 = trs[0].querySelectorAll('th')
    expect(ths1.length).toBe(3)
    expect(ths1[0]).toHaveTextContent('foo')
    expect(ths1[1]).toHaveTextContent('bar')
    expect(ths1[2]).toHaveTextContent('baz')
  }
)

test(
  'head with two rows including object',
  async () => {
    render(
      <TableWrapper>
        <TableHead
          headRows={[
            ['foo', 'bar', 'baz'],
            {
              className: 'wibble',
              cells: ['wiz', 'bang', 'wang']
            }
          ]}
          data-testid="thead"
        />
      </TableWrapper>
    )
    const thead = screen.getByTestId('thead')
    const trs = thead.querySelectorAll('tr')
    expect(trs.length).toBe(2)
    const ths1 = trs[0].querySelectorAll('th')
    expect(ths1.length).toBe(3)
    expect(ths1[0]).toHaveTextContent('foo')
    expect(ths1[1]).toHaveTextContent('bar')
    expect(ths1[2]).toHaveTextContent('baz')
    const ths2 = trs[1].querySelectorAll('th')
    expect(trs[1]).toHaveClass('wibble')
    expect(ths2.length).toBe(3)
    expect(ths2[0]).toHaveTextContent('wiz')
    expect(ths2[1]).toHaveTextContent('bang')
    expect(ths2[2]).toHaveTextContent('wang')
  }
)

test(
  'head with row including object with cells',
  async () => {
    render(
      <TableWrapper>
        <TableHead
          headRows={[
            {
              className: 'wibble',
              cells: [
                { text: 'foo', className: 'wobble' }, 'bar', 'baz']
            }
          ]}
          data-testid="thead"
        />
      </TableWrapper>
    )
    const thead = screen.getByTestId('thead')
    const trs = thead.querySelectorAll('tr')
    expect(trs.length).toBe(1)
    expect(trs[0]).toHaveClass('wibble')
    const ths1 = trs[0].querySelectorAll('th')
    expect(ths1.length).toBe(3)
    expect(ths1[0]).toHaveTextContent('foo')
    expect(ths1[0]).toHaveClass('wobble')
    expect(ths1[1]).toHaveTextContent('bar')
    expect(ths1[2]).toHaveTextContent('baz')
  }
)
