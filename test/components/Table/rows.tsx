import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableRows } from '@/src/index'
import { ReactNode } from 'react'
import { fail } from '@abw/badger-utils'

export const TableWrapper = ({ children }: { children: ReactNode }) =>
  <table data-testid="table">
    {children}
  </table>

test(
  'rows with just headRows',
  async () => {
    render(
      <TableWrapper>
        <TableRows
          headRows={[
            ['foo', { text: 'bar' }, () => 'baz'],
            {
              className: 'wobble',
              th: false,
              cells: ['wam', 'bam', { text: () => 'sham', th: true }]
            }
          ]}
          headProps={{
            'className': 'wibble'
          }}
        />
      </TableWrapper>
    )
    const table = screen.getByTestId('table')
    const thead = table.querySelector('thead') || fail('no thead')
    expect(thead).toHaveClass('wibble')
    const trs = thead.querySelectorAll('tr')
    expect(trs.length).toBe(2)
    const ths = trs[0].querySelectorAll('th')
    expect(ths.length).toBe(3)
    expect(ths[0]).toHaveTextContent('foo')
    expect(ths[1]).toHaveTextContent('bar')
    expect(ths[2]).toHaveTextContent('baz')
    const tds = trs[1].querySelectorAll('td')
    expect(tds.length).toBe(2)
    expect(tds[0]).toHaveTextContent('wam')
    expect(tds[1]).toHaveTextContent('bam')
    const ths2 = trs[1].querySelectorAll('th')
    expect(ths2.length).toBe(1)
    expect(ths2[0]).toHaveTextContent('sham')
  }
)

test(
  'rows with just bodyRows',
  async () => {
    render(
      <TableWrapper>
        <TableRows
          bodyRows={[
            ['foo', { text: 'bar' }, () => 'baz'],
            {
              className: 'wobble',
              th: true,
              cells: ['wam', 'bam', { text: 'sham', th: false }]
            }
          ]}
          bodyProps={{
            'className': 'wibble'
          }}
        />
      </TableWrapper>
    )
    const table = screen.getByTestId('table')
    const tbody = table.querySelector('tbody') || fail('no tbody')
    expect(tbody).toHaveClass('wibble')
    const trs = tbody.querySelectorAll('tr')
    expect(trs.length).toBe(2)
    const tds = trs[0].querySelectorAll('td')
    expect(tds.length).toBe(3)
    expect(tds[0]).toHaveTextContent('foo')
    expect(tds[1]).toHaveTextContent('bar')
    expect(tds[2]).toHaveTextContent('baz')
    const ths = trs[1].querySelectorAll('th')
    expect(ths.length).toBe(2)
    expect(ths[0]).toHaveTextContent('wam')
    expect(ths[1]).toHaveTextContent('bam')
    const tds2 = trs[1].querySelectorAll('td')
    expect(tds2.length).toBe(1)
    expect(tds2[0]).toHaveTextContent('sham')
  }
)

test(
  'rows with just footRows',
  async () => {
    render(
      <TableWrapper>
        <TableRows
          footRows={[
            ['foo', { text: 'bar' }, () => 'baz'],
            {
              className: 'wobble',
              th: true,
              cells: ['wam', 'bam', 'sham']
            }
          ]}
          footProps={{
            'className': 'wibble'
          }}
        />
      </TableWrapper>
    )
    const table = screen.getByTestId('table')
    const tfoot = table.querySelector('tfoot') || fail('no tfoot')
    expect(tfoot).toHaveClass('wibble')
    const trs = tfoot.querySelectorAll('tr')
    expect(trs.length).toBe(2)
    const tds = trs[0].querySelectorAll('td')
    expect(tds.length).toBe(3)
    expect(tds[0]).toHaveTextContent('foo')
    expect(tds[1]).toHaveTextContent('bar')
    expect(tds[2]).toHaveTextContent('baz')
    const ths = trs[1].querySelectorAll('th')
    expect(ths.length).toBe(3)
    expect(ths[0]).toHaveTextContent('wam')
    expect(ths[1]).toHaveTextContent('bam')
    expect(ths[2]).toHaveTextContent('sham')
  }
)

/*
export const TableRows = ({
  bodyRows,
  headRows,
  footRows,
  Head=TableHead,
  Body=TableBody,
  Foot=TableFoot,
  ...props
}: TableRowsProps) =>
*/
/*
export const rows = [
  // simple rows as arrays of text
  ['Nigel Tufnel', 'Guitar'],
  ['David St. Hubbins', 'Guitar'],
  ['Derek Smalls', 'Bass'],
  ['Viv Savage', 'Keyboards'],
  // row as an object with cells array
  {
    className: 'error',
    cells: ['Mick Shrimpton', 'Drums']
  },
  // row with cells as objects
  [
    { th: true, text: 'Ian Faith' },
    { th: true, className: 'green inverse', text: 'Manager' }
  ]
]

const TableExample = () =>
  <Table
    celled shaded
    rows={rows}
  />

test(
  'table rows',
  async () => {
    const { container } = render(
      <TableExample/>
    )
    const table = container.querySelector('table')
    expect(table).toBeDefined()

    const rows = table.querySelectorAll('tr')
    expect(rows.length).toBe(6)

    const tds1 = rows[0].querySelectorAll('td')
    expect(tds1[0]).toHaveTextContent('Nigel Tufnel')
    expect(tds1[1]).toHaveTextContent('Guitar')

    const tds2 = rows[1].querySelectorAll('td')
    expect(tds2[0]).toHaveTextContent('David St. Hubbins')
    expect(tds2[1]).toHaveTextContent('Guitar')

    const tds3 = rows[2].querySelectorAll('td')
    expect(tds3[0]).toHaveTextContent('Derek Smalls')
    expect(tds3[1]).toHaveTextContent('Bass')

    const tds4 = rows[3].querySelectorAll('td')
    expect(tds4[0]).toHaveTextContent('Viv Savage')
    expect(tds4[1]).toHaveTextContent('Keyboards')

    const tds5 = rows[4].querySelectorAll('td')
    expect(rows[4]).toHaveClass('error')
    expect(tds5[0]).toHaveTextContent('Mick Shrimpton')
    expect(tds5[1]).toHaveTextContent('Drums')

    const ths6 = rows[5].querySelectorAll('th')
    expect(ths6[0]).toHaveTextContent('Ian Faith')
    expect(ths6[1]).toHaveTextContent('Manager')
    expect(ths6[1]).toHaveClass('green inverse')
  }
)
*/