import { test, expect } from 'vitest'
import { arraysDiffer } from '@/src/index'

test(
  'no changes',
  () => expect(
    arraysDiffer(
      [ 10, 20 ],
      [ 10, 20 ],
    )
  ).toBe(false)
)

test(
  'first array shorter',
  () => expect(
    arraysDiffer(
      [ 10, 20 ],
      [ 10, 20, 30 ],
    )
  ).toBe(true)
)

test(
  'second array shorter',
  () => expect(
    arraysDiffer(
      [ 10, 20, 30 ],
      [ 10, 20 ],
    )
  ).toBe(true)
)

test(
  'different values',
  () => expect(
    arraysDiffer(
      [ 10, 20 ],
      [ 10, 30 ],
    )
  ).toBe(true)
)

