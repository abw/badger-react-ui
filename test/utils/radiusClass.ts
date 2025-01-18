import { test, expect } from 'vitest'
import { radiusClass } from '@/src/utils/classes'

test(
  'radiusClass(false) => null',
  () => expect(
    radiusClass(false)
  ).toBe(
    null
  )
)

test(
  'radiusClass(true) => "bdr-1"',
  () => expect(
    radiusClass(true)
  ).toBe(
    'bdr-1'
  )
)

test(
  'radiusClass(1) => "bdr-1"',
  () => expect(
    radiusClass(1)
  ).toBe(
    'bdr-1'
  )
)

test(
  'radiusClass(3) => "bdr-3"',
  () => expect(
    radiusClass(3)
  ).toBe(
    'bdr-3'
  )
)

test(
  'radiusClass("4") => "bdr-4"',
  () => expect(
    radiusClass('4')
  ).toBe(
    'bdr-4'
  )
)

test(
  'radiusClass("yes") => null',
  () => expect(
    radiusClass('yes')
  ).toBe(
    null
  )
)
