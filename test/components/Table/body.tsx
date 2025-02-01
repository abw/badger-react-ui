import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableBody } from '@/src/index'
import { ReactNode } from 'react'

export const TableWrapper = ({ children }: { children: ReactNode }) =>
  <table>
    {children}
  </table>

test(
  'body with single row of string',
  async () => {
    render(
      <TableWrapper>
        <TableBody
          rows={[
            ['foo', 'bar', 'baz'],
          ]}
          data-testid="tbody"
        />
      </TableWrapper>
    )
    const tbody = screen.getByTestId('tbody')
    const trs = tbody.querySelectorAll('tr')
    expect(trs.length).toBe(1)
    const tds = trs[0].querySelectorAll('td')
    expect(tds.length).toBe(3)
    expect(tds[0]).toHaveTextContent('foo')
    expect(tds[1]).toHaveTextContent('bar')
    expect(tds[2]).toHaveTextContent('baz')
  }
)

test(
  'body with two rows including object',
  async () => {
    render(
      <TableWrapper>
        <TableBody
          rows={[
            ['foo', 'bar', 'baz'],
            {
              className: 'wibble',
              cells: ['wiz', 'bang', 'wang']
            }
          ]}
          data-testid="tbody"
        />
      </TableWrapper>
    )
    const tbody = screen.getByTestId('tbody')
    const trs = tbody.querySelectorAll('tr')
    expect(trs.length).toBe(2)
    const tds1 = trs[0].querySelectorAll('td')
    expect(tds1.length).toBe(3)
    expect(tds1[0]).toHaveTextContent('foo')
    expect(tds1[1]).toHaveTextContent('bar')
    expect(tds1[2]).toHaveTextContent('baz')
    const tds2 = trs[1].querySelectorAll('td')
    expect(trs[1]).toHaveClass('wibble')
    expect(tds2.length).toBe(3)
    expect(tds2[0]).toHaveTextContent('wiz')
    expect(tds2[1]).toHaveTextContent('bang')
    expect(tds2[2]).toHaveTextContent('wang')
  }
)

test(
  'body with row including object with cells',
  async () => {
    render(
      <TableWrapper>
        <TableBody
          rows={[
            {
              className: 'wibble',
              cells: [
                { text: 'foo', className: 'wobble', th: true }, 'bar', 'baz']
            }
          ]}
          data-testid="tbody"
        />
      </TableWrapper>
    )
    const tbody = screen.getByTestId('tbody')
    const trs = tbody.querySelectorAll('tr')
    expect(trs.length).toBe(1)
    expect(trs[0]).toHaveClass('wibble')
    const ths = trs[0].querySelectorAll('th')
    const tds = trs[0].querySelectorAll('td')
    expect(ths.length).toBe(1)
    expect(tds.length).toBe(2)
    expect(ths[0]).toHaveTextContent('foo')
    expect(ths[0]).toHaveClass('wobble')
    expect(tds[0]).toHaveTextContent('bar')
    expect(tds[1]).toHaveTextContent('baz')
  }
)
