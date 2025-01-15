import { test, expect } from 'vitest'
import { gridClass } from '@/src/utils/classes'

test(
  'gridClass(undefined) => null',
  () => expect(
    gridClass(undefined)
  ).toBe(
    null
  )
)

test(
  'gridClass(null) => null',
  () => expect(
    gridClass(null)
  ).toBe(
    null
  )
)

test(
  'gridClass(true) => "grid-1"',
  () => expect(
    gridClass(true)
  ).toBe(
    'grid-1'
  )
)

test(
  'gridClass(1) => "grid-1"',
  () => expect(
    gridClass(1)
  ).toBe(
    'grid-1'
  )
)

test(
  'gridClass(3) => "grid-3"',
  () => expect(
    gridClass(3)
  ).toBe(
    'grid-3'
  )
)

test(
  'gridClass("4") => "grid-4"',
  () => expect(
    gridClass('4')
  ).toBe(
    'grid-4'
  )
)

test(
  'gridClass("fit") => "grid-fit"',
  () => expect(
    gridClass('fit')
  ).toBe(
    'grid-fit'
  )
)
