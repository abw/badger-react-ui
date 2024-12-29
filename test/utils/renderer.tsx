import React from 'react'
import { expect, test, it } from 'vitest'
import { defaultRenderer, withIconsRenderer } from '@/src/utils/index'
import { render, screen } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'

const renderer = defaultRenderer('renderFoo')

test(
  'renderer(null)',
  () => expect( renderer(null) ).toBe(
    'HINT: define renderFoo() to render this value'
  )
)

test(
  'renderer(10)',
  () => expect( renderer(10) ).toBe(10)
)

test(
  'renderer("11")',
  () => expect( renderer('11') ).toBe('11')
)

test(
  'renderer({ text: "bar" })',
  () => expect( renderer({ text: 'bar' }) ).toBe('bar')
)

test(
  'renderer({ label: "baz" })',
  () => expect( renderer({ label: 'baz' }) ).toBe('baz')
)

test(
  'renderer({ name: "qux" })',
  () => expect( renderer({ name: 'qux' }) ).toBe('qux')
)

test(
  'renderer({ heading: "Hello World" })',
  () => expect( renderer({ heading: 'Hello World' }) ).toBe('Hello World')
)

test(
  'renderer({ eleven: 11 })',
  () => expect( renderer({ eleven: 11 }) ).toBe(
    'HINT: define renderFoo() to render this value'
  )
)

test(
  'withIconsRenderer(11)',
  () => expect( withIconsRenderer(11) ).toBe(11)
)

test(
  'withIconsRenderer("eleven")',
  () => expect( withIconsRenderer('eleven') ).toBe('eleven')
)

it(
  'boolean filter - select true',
  async () => {
    render(
      <div data-testid="foo">
        {withIconsRenderer({ iconLeft: 'check', text: 'Hello' })}
      </div>
    )
    const foo = screen.getByTestId('foo')
    expect(foo).toHaveTextContent('Hello')

    const icon = foo.querySelector('svg')
    expect(icon).toBeDefined()
    // console.log(prettyDOM(foo))
  }
)