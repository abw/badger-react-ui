import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useContainer } from '@/src/index'

const UseContainerTest = () => {
  const { ref, width, height, breakpoint, boxWidth, boxHeight } = useContainer()

  return (
    <div
      ref={ref}
      style={{ width: '400px', height: '300px' }}
    >
      <div data-testid="width">{width}</div>
      <div data-testid="height">{height}</div>
      <div data-testid="breakpoint">{breakpoint}</div>
      <div data-testid="boxwidth">{boxWidth}</div>
      <div data-testid="boxHeight">{boxHeight}</div>
    </div>
  )
}

it.skip(  // ResizeObserver is not defined
  'check and uncheck',
  async () => {
    render(<UseContainerTest/>)

    const width = screen.getByTestId('width')
    const height = screen.getByTestId('height')
    const breakpoint = screen.getByTestId('breakpoint')
    const boxwidth = screen.getByTestId('boxwidth')
    const boxheight = screen.getByTestId('boxheight')

    expect(width).toHaveTextContent('400')
    expect(height).toHaveTextContent('300')
    expect(breakpoint).toHaveTextContent('mobile')
    expect(boxwidth).toHaveTextContent('400')
    expect(boxheight).toHaveTextContent('300')
  }
)
