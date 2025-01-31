import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableRow } from '@/src/index'
import { ReactNode } from 'react'

export const TableWrapper = ({ children }: { children: ReactNode }) =>
  <table>
    <tbody>
      {children}
    </tbody>
  </table>

test(
  'row with text',
  async () => {
    render(
      <TableWrapper>
        <TableRow
          cells={['foo', 'bar', 'baz']}
          data-testid="tr"
        />
      </TableWrapper>
    )
    const tr = screen.getByTestId('tr')
    const tds = tr.querySelectorAll('td')
    expect(tds.length).toBe(3)
    expect(tds[0]).toHaveTextContent('foo')
    expect(tds[1]).toHaveTextContent('bar')
    expect(tds[2]).toHaveTextContent('baz')
  }
)

test(
  'row with objects',
  async () => {
    render(
      <TableWrapper>
        <TableRow
          cells={[
            { text: 'foo' },
            'bar',
            { text: 'baz', className: 'wibble', th: true }
          ]}
          data-testid="tr"
        />
      </TableWrapper>
    )
    const tr = screen.getByTestId('tr')
    const cells = tr.querySelectorAll('td,th')
    expect(cells.length).toBe(3)
    expect(cells[0]).toHaveTextContent('foo')
    expect(cells[1]).toHaveTextContent('bar')
    expect(cells[2]).toHaveTextContent('baz')
    expect(cells[2]).toHaveClass('wibble')
    expect(cells[0].nodeName.toLowerCase()).toBe('td')
    expect(cells[1].nodeName.toLowerCase()).toBe('td')
    expect(cells[2].nodeName.toLowerCase()).toBe('th')
  }
)

test(
  'row with text functions',
  async () => {
    render(
      <TableWrapper>
        <TableRow
          cells={[
            { text: () => 'foo' },
            () => 'bar',
            {
              text: ({ className }) => `baz.${className}`,
              className: 'wibble',
              th: true
            }
          ]}
          data-testid="tr"
        />
      </TableWrapper>
    )
    const tr = screen.getByTestId('tr')
    const cells = tr.querySelectorAll('td,th')
    expect(cells.length).toBe(3)
    expect(cells[0]).toHaveTextContent('foo')
    expect(cells[1]).toHaveTextContent('bar')
    expect(cells[2]).toHaveTextContent('baz.wibble')
    expect(cells[2]).toHaveClass('wibble')
    expect(cells[0].nodeName.toLowerCase()).toBe('td')
    expect(cells[1].nodeName.toLowerCase()).toBe('td')
    expect(cells[2].nodeName.toLowerCase()).toBe('th')
  }
)

