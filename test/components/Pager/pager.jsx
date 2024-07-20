import React from 'react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { render, act } from '@testing-library/react'
import { Pager } from '@/src/index.jsx'

const PagerExample = () => {
  const [page, setPage] = React.useState(0)

  return (
    <Pager
      pages={11}
      page={page}
      setPage={setPage}
    />
  )
}

test(
  'Pager component',
  async () => {
    const { container } = render(
      <PagerExample/>
    )
    const pager = container.querySelector('div.pager')
    expect(pager).toHaveAttribute('aria-label', 'Pagination navigation')

    const prev = pager.querySelector('button:first-child')
    expect(prev).toHaveAttribute('aria-label', 'No previous page')
    expect(prev).toHaveAttribute('aria-disabled', 'true')

    const next = container.querySelector('div.pager > button:last-child')
    expect(next).toHaveAttribute('aria-label', 'Next page, page 2')
    expect(next).toHaveAttribute('aria-disabled', 'false')

    const pages = pager.querySelectorAll('div.pages button')
    expect(pages.length).toBe(3)

    expect(pages[0]).toHaveAttribute('aria-current', 'page')
    expect(pages[0]).toHaveTextContent(1)

    expect(pages[1]).toHaveAttribute('aria-label', 'Go to page 2')
    expect(pages[1]).toHaveTextContent(2)

    expect(pages[2]).toHaveAttribute('aria-label', 'Go to page 11')
    expect(pages[2]).toHaveTextContent(11)
  }
)

test(
  'Pager next page',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <PagerExample/>
    )
    const pager = container.querySelector('div.pager')
    const next = container.querySelector('div.pager > button:last-child')
    expect(next).toHaveAttribute('aria-label', 'Next page, page 2')
    expect(next).toHaveAttribute('aria-disabled', 'false')

    await act( () => user.click(next) )

    const prev1 = container.querySelector('div.pager > button:first-child')
    const next1 = container.querySelector('div.pager > button:last-child')
    expect(prev1).toHaveAttribute('aria-label', 'Previous page, page 1')
    expect(prev1).toHaveAttribute('aria-disabled', 'false')
    expect(next1).toHaveAttribute('aria-label', 'Next page, page 3')
    expect(next1).toHaveAttribute('aria-disabled', 'false')

    const pages = pager.querySelectorAll('div.pages button')
    expect(pages.length).toBe(4)

    expect(pages[0]).toHaveTextContent(1)
    expect(pages[0]).toHaveAttribute('aria-label', 'Go to page 1')

    expect(pages[1]).toHaveTextContent(2)
    expect(pages[1]).toHaveAttribute('aria-current', 'page')

    expect(pages[2]).toHaveAttribute('aria-label', 'Go to page 3')
    expect(pages[2]).toHaveTextContent(3)

    expect(pages[3]).toHaveAttribute('aria-label', 'Go to page 11')
    expect(pages[3]).toHaveTextContent(11)
  }
)

test(
  'Pager last page',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <PagerExample/>
    )
    const pager = container.querySelector('div.pager')
    const page11 = pager.querySelector('div.pages > button:last-child')
    expect(page11).toHaveAttribute('aria-label', 'Go to page 11')

    await act( () => user.click(page11) )

    const prev = container.querySelector('div.pager > button:first-child')
    const next = container.querySelector('div.pager > button:last-child')
    expect(prev).toHaveAttribute('aria-label', 'Previous page, page 10')
    expect(prev).toHaveAttribute('aria-disabled', 'false')
    expect(next).toHaveAttribute('aria-label', 'No next page')
    expect(next).toHaveAttribute('aria-disabled', 'true')

    const pages = pager.querySelectorAll('div.pages button')
    expect(pages.length).toBe(3)

    expect(pages[0]).toHaveTextContent(1)
    expect(pages[0]).toHaveAttribute('aria-label', 'Go to page 1')

    expect(pages[1]).toHaveTextContent(10)
    expect(pages[1]).toHaveAttribute('aria-label', 'Go to page 10')

    expect(pages[2]).toHaveTextContent(11)
    expect(pages[2]).toHaveAttribute('aria-current', 'page')
  }
)

test(
  'Pager last page then back two',
  async () => {
    const user = userEvent.setup()
    const { container } = render(
      <PagerExample/>
    )
    const pager = container.querySelector('div.pager')
    const page11 = pager.querySelector('div.pages > button:last-child')
    expect(page11).toHaveAttribute('aria-label', 'Go to page 11')

    await act( () => user.click(page11) )

    const prev = container.querySelector('div.pager > button:first-child')
    await act( () => user.click(prev) )
    await act( () => user.click(prev) )

    const prev1 = container.querySelector('div.pager > button:first-child')
    const next1 = container.querySelector('div.pager > button:last-child')
    expect(prev1).toHaveAttribute('aria-label', 'Previous page, page 8')
    expect(prev1).toHaveAttribute('aria-disabled', 'false')
    expect(next1).toHaveAttribute('aria-label', 'Next page, page 10')
    expect(next1).toHaveAttribute('aria-disabled', 'false')

    const pages = pager.querySelectorAll('div.pages button')
    expect(pages.length).toBe(5)

    expect(pages[0]).toHaveTextContent(1)
    expect(pages[0]).toHaveAttribute('aria-label', 'Go to page 1')

    expect(pages[1]).toHaveTextContent(8)
    expect(pages[1]).toHaveAttribute('aria-label', 'Go to page 8')

    expect(pages[2]).toHaveTextContent(9)
    expect(pages[2]).toHaveAttribute('aria-current', 'page')

    expect(pages[3]).toHaveTextContent(10)
    expect(pages[3]).toHaveAttribute('aria-label', 'Go to page 10')

    expect(pages[4]).toHaveTextContent(11)
    expect(pages[4]).toHaveAttribute('aria-label', 'Go to page 11')
  }
)

