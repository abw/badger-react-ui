import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableFoot } from '@/src/index'
import { ReactNode } from 'react'

export const TableWrapper = ({ children }: { children: ReactNode }) =>
  <table>
    {children}
  </table>

test(
  'foot with single row of string',
  async () => {
    render(
      <TableWrapper>
        <TableFoot
          footRows={[
            ['foo', 'bar', 'baz'],
          ]}
          data-testid="tfoot"
        />
      </TableWrapper>
    )
    const tfoot = screen.getByTestId('tfoot')
    const trs = tfoot.querySelectorAll('tr')
    expect(trs.length).toBe(1)
    const tds = trs[0].querySelectorAll('td')
    expect(tds.length).toBe(3)
    expect(tds[0]).toHaveTextContent('foo')
    expect(tds[1]).toHaveTextContent('bar')
    expect(tds[2]).toHaveTextContent('baz')
  }
)

test(
  'foot with two rows including object',
  async () => {
    render(
      <TableWrapper>
        <TableFoot
          footRows={[
            ['foo', 'bar', 'baz'],
            {
              className: 'wibble',
              cells: ['wiz', 'bang', 'wang']
            }
          ]}
          data-testid="tfoot"
        />
      </TableWrapper>
    )
    const tfoot = screen.getByTestId('tfoot')
    const trs = tfoot.querySelectorAll('tr')
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
  'foot with row including object with cells',
  async () => {
    render(
      <TableWrapper>
        <TableFoot
          footRows={[
            {
              className: 'wibble',
              cells: [
                { text: 'foo', className: 'wobble' }, 'bar', 'baz']
            }
          ]}
          data-testid="tfoot"
        />
      </TableWrapper>
    )
    const tfoot = screen.getByTestId('tfoot')
    const trs = tfoot.querySelectorAll('tr')
    expect(trs.length).toBe(1)
    expect(trs[0]).toHaveClass('wibble')
    const tds = trs[0].querySelectorAll('td')
    expect(tds.length).toBe(3)
    expect(tds[0]).toHaveTextContent('foo')
    expect(tds[0]).toHaveClass('wobble')
    expect(tds[1]).toHaveTextContent('bar')
    expect(tds[2]).toHaveTextContent('baz')
  }
)
