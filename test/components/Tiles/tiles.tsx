import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Tiles } from '@/src/index'
import { fail } from '@abw/badger-utils'

const TilesExample = () =>
  <Tiles gap={2} minWidth="300px">
    <Cards/>
  </Tiles>

const Cards = () =>
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(
    letter =>
      <div
        key={letter}
        className="surface-3 pad-2 border bdr-1"
      >
        {letter}
      </div>
  )

test(
  'tiles',
  async () => {
    const { container } = render(
      <TilesExample/>
    )
    const tiles = container.querySelector('div.tiles') || fail('no tiles')
    expect(tiles).toHaveClass('gap-2')
    expect(tiles).toHaveAttribute('style', '--tile-min-width: 300px;')

    const cards = tiles.querySelectorAll('div')
    expect(cards.length).toBe(8)
    expect(cards[0]).toHaveTextContent('A')
    expect(cards[1]).toHaveTextContent('B')
    expect(cards[2]).toHaveTextContent('C')
    expect(cards[3]).toHaveTextContent('D')
    expect(cards[4]).toHaveTextContent('E')
    expect(cards[5]).toHaveTextContent('F')
    expect(cards[6]).toHaveTextContent('G')
    expect(cards[7]).toHaveTextContent('H')
  }
)