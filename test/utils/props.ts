import { test, expect } from 'vitest'
import { anyPropsChanged } from '@/src/index'

test(
  'no changes',
  () => expect(
    anyPropsChanged(
      'foo bar',
      { foo: 10, bar: 20 },
      { foo: 10, bar: 20 },
    )
  ).toBe(undefined)
)

test(
  'foo has changed',
  () => expect(
    anyPropsChanged(
      'foo bar',
      { foo: 10, bar: 20 },
      { foo: 11, bar: 20 },
    )
  ).toBe('foo')
)

test(
  'bar has changed',
  () => expect(
    anyPropsChanged(
      'foo bar',
      { foo: 10, bar: 20 },
      { foo: 10, bar: 21 },
    )
  ).toBe('bar')
)
